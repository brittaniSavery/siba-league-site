"use strict";

const aws = require("aws-sdk");
const ses = new aws.SES();

const join = require("./join");

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": process.env.DOMAIN,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(payload)
  };
}

function generateError(code, error) {
  console.log(error);
  return generateResponse(code, error.message);
}

module.exports.join = async event => {
  try {
    const joinEmail = join.buildEmail(event.body);
    const result = await ses.sendEmail(joinEmail).promise();
    return generateResponse(200, result);
  } catch (error) {
    return generateError(500, error);
  }
};