import { LEAGUE, RECRUITING, TOURNAMENT_TYPE } from "@data/constants";
import { CollegeEvent, ProEvent } from "@lib/global";
import "@styles/events-calendar.scss";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import { Calendar, luxonLocalizer } from "react-big-calendar";

type EventsCalendarProps = {
  league: LEAGUE;
  events: Array<CollegeEvent | ProEvent>;
};

export default function EventsCalendar({
  league,
  events = [],
}: EventsCalendarProps) {
  //TODO: Add api call to change date to match Slack
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { localizer } = useMemo(() => {
    return {
      localizer: luxonLocalizer(DateTime),
    };
  }, []);

  return (
    <>
      <div style={{ height: "80vh" }}>
        <Calendar
          popup
          localizer={localizer}
          date={currentDate}
          events={events}
          eventPropGetter={(event) => {
            const collegeEvent = event as CollegeEvent;
            let className = null;

            if (collegeEvent.tournament) {
              className = "tournament";
            } else {
              switch (event.title) {
                case RECRUITING.Contact:
                  className = "recruiting-contact";
                  break;
                case RECRUITING.Dead:
                  className = "recruiting-dead";
                  break;
                case RECRUITING.EarlyLOI:
                case RECRUITING.LateLOI:
                  className = "recruiting-loi";
                  break;
                case RECRUITING.Evaluation:
                  className = "recruiting-evaluation";
                  break;
                case RECRUITING.None:
                  className = "recruiting-none";
                  break;
                case RECRUITING.Quiet:
                  className = "recruiting-quiet";
                  break;
              }
            }

            return { className: className };
          }}
          onNavigate={(newDate) => {
            console.log("On Navigate");
            setCurrentDate(newDate);
          }}
          endAccessor={(event) => {
            let endDate = DateTime.fromJSDate(event.end);
            if (endDate.hour !== 23) {
              endDate = endDate.set({ hour: 23, minute: 59, second: 59 });
            }
            return endDate.toJSDate();
          }}
          onRangeChange={(range: { start: Date; end: Date }) => {
            const endDate = DateTime.fromJSDate(range.end);
            const lastDay2022 = DateTime.fromISO("2022-12-31");
            const firstDay2022 = DateTime.fromISO("2022-01-01");
            const duration = lastDay2022.diff(endDate, "days").toObject().days;

            if (duration < -1) {
              setCurrentDate(firstDay2022.toJSDate());
            } else if (duration > 360) {
              setCurrentDate(lastDay2022.toJSDate());
            }
          }}
        />
      </div>
    </>
  );
}
