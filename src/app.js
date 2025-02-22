const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ name: "Avrodip", age: 30 });
});

app.post("/user", (req, res) => {
  res.send("Data has been saved successfully");
});

app.put("/user", (req, res) => {
  res.send("Overwrite the data successfully");
});

app.patch("/user", (req, res) => {
  res.send("Data is updated successfully");
});

app.delete("/user", (req, res) => {
  res.send("Data is deleted successfully");
});

// app.use is handale all type of requests
// app.use("/backend", (req, res) => {
//   res.send("hellow from backend server");
// });
// app.use("/frontend", (req, res) => {
//   res.send("hellow from frontend server");
// });

// app.use("/", (req, res) => {
//   res.send("hello from Home server");
// });

app.listen(4444, () => {
  console.log("listening on port 4444...");
});
