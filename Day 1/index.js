require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.get("/twitter", (req, res) => {
  res.send("Gourav listen me");
});

app.get("/login", (req, res) => {
  res.send("<h1> please log in </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
