const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server started");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is joke",
    },
    {
      id: 2,
      title: "A  seocond joke",
      content: "This is 2 joke",
    },
    {
      id: 3,
      title: "A Third  joke",
      content: "This is 3 joke",
    },
    {
      id: 4,
      title: "A Fourth joke",
      content: "This is  4joke",
    },
    {
      id: 5,
      title: "A Fivth joke",
      content: "This is 5 joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
