"use strict";

const aws = require("aws-sdk");
const ses = new aws.SES();

const join = require("./join");
const { parse } = require("./parse");

exports.join = async (event) => {
  try {
    const joinEmail = join.buildEmail(event.body);
    const result = await ses.sendEmail(joinEmail).promise();
    return generateResponse(200, result);
  } catch (error) {
    return generateError(500, error);
  }
};

exports.parse = async (event) => {
  try {
    let url, page;

    if (event.queryStringParameters) {
      url = event.queryStringParameters.url;
      page = event.queryStringParameters.page;
    }

    if (!(url && page)) throw new Error("Required - Url and Page");

    const result = await parse(url, page);

    // errors not catching due to nested async functions, moving errors up
    if (result instanceof Error) {
      let status;

      if (result.message.indexOf("Not Found")) status = 404;
      else if (result.message.indexOf("Required")) status = 400;
      else status = 500;

      return generateError(status, result);
    }

    return generateResponse(200, result);
  } catch (error) {
    return generateError(500, error);
  }
};

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": process.env.DOMAIN,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  };
}

function generateError(code, error) {
  console.log(error);
  return generateResponse(code, error.message);
}
