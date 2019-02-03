'use strict';

const aws = require('aws-sdk')
const ses = new aws.SES()

function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': process.env.DOMAIN,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}

function generateError (code, error) {
  console.log(error)
  return generateResponse(code,error.message)
}

function buildJoinEmail (body) {
  const { name, email, foundBy, reason  } = JSON.parse(body)

  //throwing error if any important parameters are missing
  if(!(name && email && foundBy)) {
    throw new Error("Make sure to add your name, email, and how you found SIBA.")
  }

  return {
    Source: process.env.SIBA_EMAIL,
    Destination: { ToAddresses: [process.env.COMMIS_EMAIL] },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: `${name} wants to join SIBA!`
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<p>Another person wants to join the SIBA! Below is the provided information:</p>
          
          <ul>
            <li><b>Name:</b> ${name}</li>
            <li><b>Email: </b> ${email}</li>
            <li><b>Found SIBA from:</b> ${stringifyFoundBy(foundBy)}</li>
            ${reason ? `<li><b>Reason for joining:</b> ${reason}</li>` : ''}
          </ul>
          
          <p>Thanks Comissioner!</p>
          
          <p>At your service,<br />
          The Avery Incorporated IT Team</p>`
        }
      }
    }
  }
}

function stringifyFoundBy(foundBy) {
  switch(foundBy) {
    case 'referral': return 'Friend/Family'
    case 'google': return 'Google'
    case 'fb': return 'Facebook'
    case 'twitter': return 'Twitter'
    default: return 'Something else'
  }
}

module.exports.join = async (event) => {

  try {
    const joinEmail = buildJoinEmail(event.body)
    const result = await ses.sendEmail(joinEmail).promise()
    return generateResponse(200,result)

  } catch (error) {
    return generateError(500,error)
  }
}

//TODO
module.exports.upload = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
