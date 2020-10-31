const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HbXA3A94HLd0Y2iMCVjARQAWw5DN2F8JBYrRjsFpDoptY4EqY6C7kA5UtfFSsnI1BbDCiWENNyh2JblmqAxKu6z00e2D6J7Z3"
);

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total, -2), // subunits of the currency
    currency: "eur",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen Command
exports.api = functions.https.onRequest(app);

//Example Endpoint
// http://localhost:5001/challenge-e9b80/us-central1/api
