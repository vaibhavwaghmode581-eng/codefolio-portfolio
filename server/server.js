const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/contact", (req, res) => {

  const { name, email, message } = req.body;

  console.log(name);
  console.log(email);
  console.log(message);

  res.send("Message Received");

});

app.listen(5000, () => {

  console.log("Server running");

});