const express = require("express");

const app = express();

app.use("/backend", (req, res) => {
  res.send("hellow from backend server");
});
app.use("/frontend", (req, res) => {
  res.send("hellow from frontend server");
});

app.use("/", (req, res) => {
  res.send("hello from Home server");
});

app.listen(4444, () => {
  console.log("listening on port 4444...");
});
