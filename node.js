const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "+12182888444",
    body: "Hi there",
    to: "+16463548975",
  })
  .then((message) => console.log(message.sid));
