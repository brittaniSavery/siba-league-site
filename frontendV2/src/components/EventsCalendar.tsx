import { Calendar, luxonLocalizer } from "react-big-calendar";
import { DateTime } from "luxon";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import "@styles/events-calendar.scss";
import { CollegeEvent, ProEvent } from "@lib/global";

type EventsCalendarProps = {
  events: Array<CollegeEvent | ProEvent>;
};

export default function EventsCalendar({ events = [] }: EventsCalendarProps) {
  //TODO: Add api call to change date to match Slack
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { localizer } = useMemo(() => {
    return {
      localizer: luxonLocalizer(DateTime),
    };
  }, []);

  return (
    <div style={{ height: "60vh" }}>
      <Calendar
        localizer={localizer}
        date={currentDate}
        events={events}
        allDayAccessor={() => {
          return true;
        }}
        onNavigate={(newDate) => {
          console.log("On Navigate");
          setCurrentDate(newDate);
        }}
        // TODO: Figure out how to change date back to Janaury after December - onRangeChange={(end) => {console.log("On Range Change", end); }}
      />
    </div>
  );
}
