const fetch = require("node-fetch");
const parser = require("parse5");

const PAGES = {
  teamranking: "teamranking.htm",
};

exports.parse = async (url, page) => {
  try {
    const pageFileName = PAGES[page];
    if (!pageFileName) throw new Error("Not Found: Page is invalid.");

    const link = url + "/files/generated/" + pageFileName;
    const html = await this.retrieve(link);
    return this.build(page, html);
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.retrieve = async (link) => {
  try {
    const response = await fetch(link);
    if (response.ok) {
      const html = await response.text();
      return html;
    } else {
      throw new Error("Not Found: Link is invalid.");
    }
  } catch (error) {
    return error;
  }
};

exports.build = (page, html) => {
  const doc = parser.parse(html);
  const body = doc.childNodes[1].childNodes[2];

  const tables = body.childNodes.filter((child) => child.nodeName === "table");

  switch (page) {
    case "teamranking":
      return parseTeamRanking(tables[0]);
    default:
      return new Error("Not Found: No matching page");
  }
};

function parseTeamRanking(teamRanking) {
  const rows = teamRanking.childNodes
    .find((child) => child.nodeName === "tbody")
    .childNodes.filter((child) => child.nodeName === "tr");

  let colleges = [];

  //Skipping the two header rows
  for (let index = 2; index < rows.length; index++) {
    const row = rows[index];
    const td = row.childNodes.filter((child) => child.nodeName === "td")[1];

    colleges.push({
      school: td.childNodes[0].childNodes[0].value,
      ranking: getRankingSet(td.attrs.find((a) => a.name === "bgcolor").value),
    });
  }
  return colleges;
}

//Ranking group depends on the background color in the college table cells
function getRankingSet(color) {
  switch (color) {
    case "#2F5597":
      return 1;
    case "#C55A11":
      return 2;
    case "#548235":
      return 3;
  }
}