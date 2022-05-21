import { CollegeEvent } from "@lib/global";
import { DateTime } from "luxon";

const events: CollegeEvent[] = [
  // SEASON
  {
    title: "Order Recruit Scouting Services",
    start: DateTime.fromISO("2022-05-01").toJSDate(),
    end: DateTime.fromISO("2022-05-01").toJSDate(),
  },
  {
    title: "Player Transfer Sessions",
    start: DateTime.fromISO("2022-06-05").toJSDate(),
    end: DateTime.fromISO("2022-06-22").toJSDate(),
  },
  {
    title: "Schedule Summer Camp Travel",
    start: DateTime.fromISO("2022-06-25").toJSDate(),
    end: DateTime.fromISO("2022-06-25").toJSDate(),
  },
  {
    title: "Recruiting Begins",
    start: DateTime.fromISO("2022-06-26").toJSDate(),
    end: DateTime.fromISO("2022-06-26").toJSDate(),
  },
  {
    title: "National Recruit Camps",
    start: DateTime.fromISO("2022-07-04").toJSDate(),
    end: DateTime.fromISO("2022-07-06T23:59:59").toJSDate(),
  },
  {
    title: "Las Vegas Revue Camp (West Region Camp)",
    start: DateTime.fromISO("2022-07-07").toJSDate(),
    end: DateTime.fromISO("2022-07-09T23:59:59").toJSDate(),
  },
  {
    title: "Houston Classic Camp (Great Plains Region Camp)",
    start: DateTime.fromISO("2022-07-11").toJSDate(),
    end: DateTime.fromISO("2022-07-13T23:59:59").toJSDate(),
  },
  {
    title: "Chicago Prep Revue Camp (Midwest Region Camp)",
    start: DateTime.fromISO("2022-07-14").toJSDate(),
    end: DateTime.fromISO("2022-07-16T23:59:59").toJSDate(),
  },
  {
    title: "Memphis Hoop Summit Camp (Southeast Region Camp)",
    start: DateTime.fromISO("2022-07-25").toJSDate(),
    end: DateTime.fromISO("2022-07-27T23:59:59").toJSDate(),
  },
  {
    title: "Big Apple Showcase Camp (Atlantic East Region Camp)",
    start: DateTime.fromISO("2022-07-28").toJSDate(),
    end: DateTime.fromISO("2022-07-30T23:59:59").toJSDate(),
  },
  {
    title: "Scheduling Decisions",
    start: DateTime.fromISO("2022-09-18").toJSDate(),
    end: DateTime.fromISO("2022-09-18T23:59:59").toJSDate(),
  },
  {
    title: "Practice Begins",
    start: DateTime.fromISO("2022-10-02").toJSDate(),
    end: DateTime.fromISO("2022-10-02T23:59:59").toJSDate(),
  },
  {
    title: "Season Begins",
    start: DateTime.fromISO("2022-11-13").toJSDate(),
    end: DateTime.fromISO("2022-11-13T23:59:59").toJSDate(),
  },
  {
    title: "Preseason Tournaments",
    start: DateTime.fromISO("2022-11-13").toJSDate(),
    end: DateTime.fromISO("2022-12-25T23:59:59").toJSDate(),
  },
  {
    title: "Recruit SAT Scores Finalized",
    start: DateTime.fromISO("2022-01-28").toJSDate(),
    end: DateTime.fromISO("2022-01-28T23:59:59").toJSDate(),
  },
  {
    title: "Conference Tournaments Begin",
    start: DateTime.fromISO("2022-03-05").toJSDate(),
    end: DateTime.fromISO("2022-03-05T23:59:59").toJSDate(),
  },
  {
    title: "Selection Show",
    start: DateTime.fromISO("2022-03-12").toJSDate(),
    end: DateTime.fromISO("2022-03-12T23:59:59").toJSDate(),
  },
  {
    title: "Postseason Tournaments Begin",
    start: DateTime.fromISO("2022-03-13").toJSDate(),
    end: DateTime.fromISO("2022-03-13T23:59:59").toJSDate(),
  },
  {
    title: "Association Awards",
    start: DateTime.fromISO("2022-04-08").toJSDate(),
    end: DateTime.fromISO("2022-04-08T23:59:59").toJSDate(),
  },
  {
    title: "Head Coach Hiring",
    start: DateTime.fromISO("2022-04-09").toJSDate(),
    end: DateTime.fromISO("2022-04-09T23:59:59").toJSDate(),
  },
  {
    title: "Assistant Coach Hiring",
    start: DateTime.fromISO("2022-04-16").toJSDate(),
    end: DateTime.fromISO("2022-04-16T23:59:59").toJSDate(),
  },
  {
    title: "Meeting with School Board",
    start: DateTime.fromISO("2022-04-23").toJSDate(),
    end: DateTime.fromISO("2022-04-23T23:59:59").toJSDate(),
  },

  // RECRUITING
  {
    title: "No Recruiting",
    start: DateTime.fromISO("2022-05-01").toJSDate(),
    end: DateTime.fromISO("2022-06-25").toJSDate(),
  },
];

export default events;
