require("dotenv").config();
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const bodyParser = require("body-parser");
const condition = require('./conditions')
const { MongoClient } = require("mongodb");

const app = express();
const uri = process.env.MONGDB_URI
const mongoClient = new MongoClient(uri);


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sms", (req, res) => {
  // Start our TwiML response.
  // console.log(res)
  console.log(req.body)//incoming messages


  const msg = condition.checkBody(req.body.Body)

  const twiml = new MessagingResponse();

  // Add a text message.
  // const msg = twiml.message("Check out this sweet owl!");
  const sendingMsg = twiml.message(msg);

  // Add a picture message.
  // msg.media("https://demo.twilio.com/owl.png");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

app.listen(3000, () => {
  console.log("HOSTING!");
});
