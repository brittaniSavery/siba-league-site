import { CollegeEvent } from "@lib/global";
import { RECRUITING, TOURNAMENT_TYPE } from "./constants";

const events: CollegeEvent[] = [
  //#region RECRUITING
  {
    title: RECRUITING.Evaluation,
    start: new Date("2022-01-01"),
    end: new Date("2022-03-18"),
  },
  {
    title: RECRUITING.Contact,
    start: new Date("2022-03-19"),
    end: new Date("2022-03-25"),
  },
  {
    title: RECRUITING.Quiet,
    start: new Date("2022-03-26"),
    end: new Date("2022-04-01"),
  },
  {
    title: RECRUITING.Dead,
    start: new Date("2022-04-02"),
    end: new Date("2022-04-08"),
  },
  {
    title: RECRUITING.Contact,
    start: new Date("2022-04-09"),
    end: new Date("2022-04-30"),
  },
  {
    title: RECRUITING.LateLOI,
    start: new Date("2022-04-09"),
    end: new Date("2022-04-30"),
  },
  {
    title: RECRUITING.None,
    start: new Date("2022-05-01"),
    end: new Date("2022-06-25"),
  },
  {
    title: RECRUITING.Quiet,
    start: new Date("2022-06-26"),
    end: new Date("2022-07-02"),
  },
  {
    title: RECRUITING.Evaluation,
    start: new Date("2022-07-03"),
    end: new Date("2022-07-16"),
  },
  {
    title: RECRUITING.Dead,
    start: new Date("2022-07-17"),
    end: new Date("2022-07-23"),
  },
  {
    title: RECRUITING.Evaluation,
    start: new Date("2022-07-24"),
    end: new Date("2022-07-30"),
  },
  {
    title: RECRUITING.Quiet,
    start: new Date("2022-07-31"),
    end: new Date("2022-09-10"),
  },
  {
    title: RECRUITING.Contact,
    start: new Date("2022-09-11"),
    end: new Date("2022-10-08"),
  },
  {
    title: RECRUITING.Quiet,
    start: new Date("2022-10-09"),
    end: new Date("2022-11-19"),
  },
  {
    title: RECRUITING.EarlyLOI,
    start: new Date("2022-11-13"),
    end: new Date("2022-11-19"),
  },
  {
    title: RECRUITING.Evaluation,
    start: new Date("2022-11-20"),
    end: new Date("2022-12-31"),
  },

  //#endregion

  //#region SEASON
  {
    title: "Order Recruit Scouting Services",
    start: new Date("2022-05-01"),
    end: new Date("2022-05-01"),
  },
  {
    title: "Player Transfer Sessions",
    start: new Date("2022-06-05"),
    end: new Date("2022-06-22"),
  },
  {
    title: "Schedule Summer Camp Travel",
    start: new Date("2022-06-25"),
    end: new Date("2022-06-25"),
  },
  {
    title: "Recruiting Begins",
    start: new Date("2022-06-26"),
    end: new Date("2022-06-26"),
  },
  {
    title: "National Recruit Camps",
    start: new Date("2022-07-04"),
    end: new Date("2022-07-06"),
  },
  {
    title: "Las Vegas Revue Camp (West Region Camp)",
    start: new Date("2022-07-07"),
    end: new Date("2022-07-09"),
  },
  {
    title: "Houston Classic Camp (Great Plains Region Camp)",
    start: new Date("2022-07-11"),
    end: new Date("2022-07-13"),
  },
  {
    title: "Chicago Prep Revue Camp (Midwest Region Camp)",
    start: new Date("2022-07-14"),
    end: new Date("2022-07-16"),
  },
  {
    title: "Memphis Hoop Summit Camp (Southeast Region Camp)",
    start: new Date("2022-07-25"),
    end: new Date("2022-07-27"),
  },
  {
    title: "Big Apple Showcase Camp (Atlantic East Region Camp)",
    start: new Date("2022-07-28"),
    end: new Date("2022-07-30"),
  },
  {
    title: "Scheduling Decisions",
    start: new Date("2022-09-18"),
    end: new Date("2022-09-18"),
  },
  {
    title: "Practice Begins",
    start: new Date("2022-10-02"),
    end: new Date("2022-10-02"),
  },
  {
    title: "Season Begins",
    start: new Date("2022-11-13"),
    end: new Date("2022-11-13"),
  },
  {
    title: "Recruit SAT Scores Finalized",
    start: new Date("2022-01-28"),
    end: new Date("2022-01-28"),
  },
  {
    title: "Conference Tournaments Begin",
    start: new Date("2022-03-05"),
    end: new Date("2022-03-05"),
  },
  {
    title: "Selection Show",
    start: new Date("2022-03-12"),
    end: new Date("2022-03-12"),
  },
  {
    title: "Postseason Tournaments Begin",
    start: new Date("2022-03-13"),
    end: new Date("2022-03-13"),
  },
  {
    title: "Association Awards",
    start: new Date("2022-04-08"),
    end: new Date("2022-04-08"),
  },
  {
    title: "Head Coach Hiring",
    start: new Date("2022-04-09"),
    end: new Date("2022-04-09"),
  },
  {
    title: "Assistant Coach Hiring",
    start: new Date("2022-04-16"),
    end: new Date("2022-04-16"),
  },
  {
    title: "Meeting with School Board",
    start: new Date("2022-04-23"),
    end: new Date("2022-04-23"),
  },
  //#endregion

  //#region TOURNAMENTS

  {
    title: "Coaches Classic",
    start: new Date("2022-11-13"),
    end: new Date("2022-11-19"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Preseason CBT Tournament",
    start: new Date("2022-11-14"),
    end: new Date("2022-11-20"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Hawaiian Shootout",
    start: new Date("2022-11-18"),
    end: new Date("2022-11-20"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Tip-Off In Paradise",
    start: new Date("2022-11-18"),
    end: new Date("2022-11-20"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "WS Midwest Invitational",
    start: new Date("2022-11-21"),
    end: new Date("2022-11-23"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Fallen Heroes Tournament",
    start: new Date("2022-11-21"),
    end: new Date("2022-11-23"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Alaskan Classic",
    start: new Date("2022-11-25"),
    end: new Date("2022-11-27"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Palmetto Shootout",
    start: new Date("2022-11-25"),
    end: new Date("2022-11-27"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Sunshine Shootout",
    start: new Date("2022-12-09"),
    end: new Date("2022-12-11"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Golden State Classic",
    start: new Date("2022-12-09"),
    end: new Date("2022-12-11"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Las Vegas Winter Jam",
    start: new Date("2022-12-16"),
    end: new Date("2022-12-18"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Caribbean Challenge",
    start: new Date("2022-12-16"),
    end: new Date("2022-12-18"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "JAG Holiday Invitational",
    start: new Date("2022-12-23"),
    end: new Date("2022-12-25"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "Hoops For Troops",
    start: new Date("2022-12-23"),
    end: new Date("2022-12-25"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.preseason,
  },
  {
    title: "SICBA Tournament",
    start: new Date("2022-03-14"),
    end: new Date("2022-04-03"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "CBT Tournament",
    start: new Date("2022-03-13"),
    end: new Date("2022-03-30"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "IBI Tournament",
    start: new Date("2022-03-13"),
    end: new Date("2022-03-30"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  {
    title: "USIT Tournament",
    start: new Date("2022-03-14"),
    end: new Date("2022-03-29"),
    tournament: true,
    tournamentType: TOURNAMENT_TYPE.postseason,
  },
  //#endregion
];

export default events;
