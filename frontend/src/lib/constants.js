//Statuses
export const SENT = "sent";
export const SENDING = "sending";
export const ERROR = "error";
export const PRO = "pro";
export const COLLEGE = "college";

//actions
export const UPLOAD_VALIDATE = "UPLOAD_VALIDATE";
export const UPLOAD_CHANGE = "UPLOAD_CHANGE";
export const UPLOAD_SUBMIT = "UPLOAD_SUBMIT";
export const UPLOAD_SUBMIT_SUCCESS = "UPLOAD_SUBMIT_SUCCESS";
export const UPLOAD_SUBMIT_FAIL = "UPLOAD_SUBMIT_FAIL";

//game-related variables
export const COACH_LEVELS_TERRIBLE_GREAT = [
  "Terrible",
  "Low",
  "Average",
  "High",
  "Great",
];

export const COACH_LEVELS_HIGH_LOW = [
  "Very Low",
  "Low",
  "Average",
  "High",
  "Very High",
];

export const PRO_ABILITY_POINTS = [
  { label: "Offensive Ability", id: "offensive" },
  { label: "Defensive Ability", id: "defensive" },
  { label: "Potential", id: "potential" },
  { label: "Game Strategy", id: "strategy" },
  { label: "Player Development", id: "development" },
];

export const COLLEGE_ABILITY_POINTS = [
  { label: "Offensive Concepts", id: "offensive" },
  { label: "Defensive Concepts", id: "defensive" },
  { label: "Recruiting Skills", id: "recruiting" },
  { label: "Scouting Skills", id: "scouting" },
  { label: "Player Development", id: "development" },
];

export const COLLEGE_COACH_PERSONALITY = [
  "Academics",
  "Ambition",
  "Discipline",
  "Integrity",
  "Temper",
];

export const CONFERENCES = [
  { file: "A-Sun", title: "Atlantic Sun Conference " },
  { file: "A10", title: "Atlantic 10 Conference " },
  { file: "AAC", title: "American Athletic Conference " },
  { file: "ACC", title: "Atlantic Coast Conference " },
  { file: "America East", title: "America East Conference " },
  { file: "Big 10", title: "Big 10 Conference" },
  { file: "Big 12", title: "Big 12 Conference" },
  { file: "Big East", title: "Big East Conference" },
  { file: "Big Sky", title: "Big Sky Conference" },
  { file: "Big South", title: "Big South Conference" },
  { file: "Big West", title: "Big West Conference" },
  { file: "C-USA", title: "Conference USA" },
  { file: "CAA", title: "Colonial Athletic Association" },
  { file: "Horizon", title: "Horizon League" },
  { file: "Ivy League", title: "Ivy League", img: "ivy" },
  { file: "MAAC", title: "Metro Atlantic Athletic Conference" },
  { file: "MAC", title: "Mid-American Conference" },
  { file: "MEAC", title: "Mid-Eastern Athletic Conference" },
  { file: "MVC", title: "Missouri Valley Conference" },
  { file: "MWC", title: "Mountain West Conference" },
  { file: "Northeast", title: "Northeast Conference", img: "nec" },
  { file: "OVC", title: "Ohio Valley Conference" },
  { file: "PAC 12", title: "PAC-12 Conference" },
  { file: "Patriot League", title: "Patriot League", img: "patriot" },
  { file: "SEC", title: "Southeastern Conference" },
  { file: "SOCON", title: "Southern Conference" },
  { file: "SWAC", title: "Southwestern Athletic Conference" },
  { file: "Southland", title: "Southland Conference" },
  { file: "Summit", title: "Summit League" },
  { file: "Sun Belt", title: "Sun Belt Conference" },
  { file: "WAC", title: "Western Athletic Conference" },
  { file: "WCC", title: "West Coast Conference" },
];

export const PRO_TEAMS = [
  "Boston Nighthawks",
  "Calgary Charge",
  "Charlotte Wasps",
  "Chicago Guardians",
  "Columbus Barons",
  "Dallas Rangers",
  "Denver Peaks",
  "Detroit Legion",
  "Houston Stampede",
  "Indiana Express",
  "Kansas City Koyotes",
  "Los Angeles Waves",
  "Memphis Vandals",
  "Miami Sunbirds",
  "Milwaukee Wildcats",
  "Minnesota Lancers",
  "Montreal Argonauts",
  "New Jersey Hoops",
  "New Orleans Bears",
  "New York Metros",
  "Oklahoma City Twisters",
  "Philadelphia Silverbacks",
  "Phoenix Scorpions",
  "Portland Rhinos",
  "San Antonio Monarchs",
  "San Diego Captains",
  "Seattle Sasquatch",
  "Toronto Roar",
  "Vancouver Rain",
  "Washington Eagles",
];
