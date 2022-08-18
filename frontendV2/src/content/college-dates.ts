import { CollegeEvent } from "@lib/global";
import { DateTime } from "luxon";
import { RECRUITING, TOURNAMENT_TYPE } from "./constants";

const events: CollegeEvent[] = [
  //#region RECRUITING
  {
    title: RECRUITING.Evaluation,
    start: DateTime.fromISO("2022-01-01").toJSDate(),
    end: DateTime.fromISO("2022-03-18").toJSDate(),
  },
  {
    title: RECRUITING.Contact,
    start: DateTime.fromISO("2022-03-19").toJSDate(),
    end: DateTime.fromISO("2022-03-25").toJSDate(),
  },
  {
    title: RECRUITING.Quiet,
    start: DateTime.fromISO("2022-03-26").toJSDate(),
    end: DateTime.fromISO("2022-04-01").toJSDate(),
  },
  {
    title: RECRUITING.Dead,
    start: DateTime.fromISO("2022-04-02").toJSDate(),
    end: DateTime.fromISO("2022-04-08").toJSDate(),
  },
  {
    title: RECRUITING.Contact,
    start: DateTime.fromISO("2022-04-09").toJSDate(),
    end: DateTime.fromISO("2022-04-30").toJSDate(),
  },
  {
    title: RECRUITING.LateLOI,
    start: DateTime.fromISO("2022-04-09").toJSDate(),
    end: DateTime.fromISO("2022-04-30").toJSDate(),
  },
  {
    title: RECRUITING.None,
    start: DateTime.fromISO("2022-05-01").toJSDate(),
    end: DateTime.fromISO("2022-06-25").toJSDate(),
  },
  {
    title: RECRUITING.Quiet,
    start: DateTime.fromISO("2022-06-26").toJSDate(),
    end: DateTime.fromISO("2022-07-02").toJSDate(),
  },
  {
    title: RECRUITING.Evaluation,
    start: DateTime.fromISO("2022-07-03").toJSDate(),
    end: DateTime.fromISO("2022-07-16").toJSDate(),
  },
  {
    title: RECRUITING.Dead,
    start: DateTime.fromISO("2022-07-17").toJSDate(),
    end: DateTime.fromISO("2022-07-23").toJSDate(),
  },
  {
    title: RECRUITING.Evaluation,
    start: DateTime.fromISO("2022-07-24").toJSDate(),
    end: DateTime.fromISO("2022-07-30").toJSDate(),
  },
  {
    title: RECRUITING.Quiet,
    start: DateTime.fromISO("2022-07-31").toJSDate(),
    end: DateTime.fromISO("2022-09-10").toJSDate(),
  },
  {
    title: RECRUITING.Contact,
    start: DateTime.fromISO("2022-09-11").toJSDate(),
    end: DateTime.fromISO("2022-10-08").toJSDate(),
  },
  {
    title: RECRUITING.Quiet,
    start: DateTime.fromISO("2022-10-09").toJSDate(),
    end: DateTime.fromISO("2022-11-19").toJSDate(),
  },
  {
    title: RECRUITING.EarlyLOI,
    start: DateTime.fromISO("2022-11-13").toJSDate(),
    end: DateTime.fromISO("2022-11-19").toJSDate(),
  },
  {
    title: RECRUITING.Evaluation,
    start: DateTime.fromISO("2022-11-20").toJSDate(),
    end: DateTime.fromISO("2022-12-31").toJSDate(),
  },

  //#endregion

  //#region SEASON
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
    end: DateTime.fromISO("2022-07-06").toJSDate(),
  },
  {
    title: "Las Vegas Revue Camp (West Region Camp)",
    start: DateTime.fromISO("2022-07-07").toJSDate(),
    end: DateTime.fromISO("2022-07-09").toJSDate(),
  },
  {
    title: "Houston Classic Camp (Great Plains Region Camp)",
    start: DateTime.fromISO("2022-07-11").toJSDate(),
    end: DateTime.fromISO("2022-07-13").toJSDate(),
  },
  {
    title: "Chicago Prep Revue Camp (Midwest Region Camp)",
    start: DateTime.fromISO("2022-07-14").toJSDate(),
    end: DateTime.fromISO("2022-07-16").toJSDate(),
  },
  {
    title: "Memphis Hoop Summit Camp (Southeast Region Camp)",
    start: DateTime.fromISO("2022-07-25").toJSDate(),
    end: DateTime.fromISO("2022-07-27").toJSDate(),
  },
  {
    title: "Big Apple Showcase Camp (Atlantic East Region Camp)",
    start: DateTime.fromISO("2022-07-28").toJSDate(),
    end: DateTime.fromISO("2022-07-30").toJSDate(),
  },
  {
    title: "Scheduling Decisions",
    start: DateTime.fromISO("2022-09-18").toJSDate(),
    end: DateTime.fromISO("2022-09-18").toJSDate(),
  },
  {
    title: "Practice Begins",
    start: DateTime.fromISO("2022-10-02").toJSDate(),
    end: DateTime.fromISO("2022-10-02").toJSDate(),
  },
  {
    title: "Season Begins",
    start: DateTime.fromISO("2022-11-13").toJSDate(),
    end: DateTime.fromISO("2022-11-13").toJSDate(),
  },
  {
    title: "Recruit SAT Scores Finalized",
    start: DateTime.fromISO("2022-01-28").toJSDate(),
    end: DateTime.fromISO("2022-01-28").toJSDate(),
  },
  {
    title: "Conference Tournaments Begin",
    start: DateTime.fromISO("2022-03-05").toJSDate(),
    end: DateTime.fromISO("2022-03-05").toJSDate(),
  },
  {
    title: "Selection Show",
    start: DateTime.fromISO("2022-03-12").toJSDate(),
    end: DateTime.fromISO("2022-03-12").toJSDate(),
  },
  {
    title: "Postseason Tournaments Begin",
    start: DateTime.fromISO("2022-03-13").toJSDate(),
    end: DateTime.fromISO("2022-03-13").toJSDate(),
  },
  {
    title: "Association Awards",
    start: DateTime.fromISO("2022-04-08").toJSDate(),
    end: DateTime.fromISO("2022-04-08").toJSDate(),
  },
  {
    title: "Head Coach Hiring",
    start: DateTime.fromISO("2022-04-09").toJSDate(),
    end: DateTime.fromISO("2022-04-09").toJSDate(),
  },
  {
    title: "Assistant Coach Hiring",
    start: DateTime.fromISO("2022-04-16").toJSDate(),
    end: DateTime.fromISO("2022-04-16").toJSDate(),
  },
  {
    title: "Meeting with School Board",
    start: DateTime.fromISO("2022-04-23").toJSDate(),
    end: DateTime.fromISO("2022-04-23").toJSDate(),
  },
  //#endregion

  //#region TOURNAMENTS

  {
    title: "Coaches Classic",
    start: DateTime.fromISO("2022-11-13").toJSDate(),
    end: DateTime.fromISO("2022-11-19").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Preseason CBT Tournament",
    start: DateTime.fromISO("2022-11-14").toJSDate(),
    end: DateTime.fromISO("2022-11-20").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Hawaiian Shootout",
    start: DateTime.fromISO("2022-11-18").toJSDate(),
    end: DateTime.fromISO("2022-11-20").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Tip-Off In Paradise",
    start: DateTime.fromISO("2022-11-18").toJSDate(),
    end: DateTime.fromISO("2022-11-20").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "WS Midwest Invitational",
    start: DateTime.fromISO("2022-11-21").toJSDate(),
    end: DateTime.fromISO("2022-11-23").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Fallen Heroes Tournament",
    start: DateTime.fromISO("2022-11-21").toJSDate(),
    end: DateTime.fromISO("2022-11-23").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Alaskan Classic",
    start: DateTime.fromISO("2022-11-25").toJSDate(),
    end: DateTime.fromISO("2022-11-27").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Palmetto Shootout",
    start: DateTime.fromISO("2022-11-25").toJSDate(),
    end: DateTime.fromISO("2022-11-27").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Sunshine Shootout",
    start: DateTime.fromISO("2022-12-09").toJSDate(),
    end: DateTime.fromISO("2022-12-11").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Golden State Classic",
    start: DateTime.fromISO("2022-12-09").toJSDate(),
    end: DateTime.fromISO("2022-12-11").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Las Vegas Winter Jam",
    start: DateTime.fromISO("2022-12-16").toJSDate(),
    end: DateTime.fromISO("2022-12-18").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Caribbean Challenge",
    start: DateTime.fromISO("2022-12-16").toJSDate(),
    end: DateTime.fromISO("2022-12-18").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "JAG Holiday Invitational",
    start: DateTime.fromISO("2022-12-23").toJSDate(),
    end: DateTime.fromISO("2022-12-25").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Hoops For Troops",
    start: DateTime.fromISO("2022-12-23").toJSDate(),
    end: DateTime.fromISO("2022-12-25").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "SICBA Tournament",
    start: DateTime.fromISO("2022-03-14").toJSDate(),
    end: DateTime.fromISO("2022-04-03").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "CBT Tournament",
    start: DateTime.fromISO("2022-03-13").toJSDate(),
    end: DateTime.fromISO("2022-03-30").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "IBI Tournament",
    start: DateTime.fromISO("2022-03-13").toJSDate(),
    end: DateTime.fromISO("2022-03-30").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "USIT Tournament",
    start: DateTime.fromISO("2022-03-14").toJSDate(),
    end: DateTime.fromISO("2022-03-29").toJSDate(),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  //#endregion
];

export default events;
