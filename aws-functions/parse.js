const fetch = require("node-fetch");

exports.retrieve = async (body) => {
  try {
    const response = await fetch(body);
    if (response.ok) {
      const html = await response.text();
      console.log(html);
      return html;
    } else {
      throw new Error("Page could not be found.");
    }
  } catch (error) {
    return error;
  }
};
