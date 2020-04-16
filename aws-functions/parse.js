const fetch = require("node-fetch");

exports.retrieve = async (body) => {
  const response = await fetch(body);
  return await response.text();
};
