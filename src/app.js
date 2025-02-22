const express = require("express");

const app = express();

// ? is used for optional and terget the string which is present before the ? symbol
// app.get("/ab?c", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Avrodip", age: 20 });
// });

// In place of * use can use any string in url which give same result
// app.get("/ab*c", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Avrodip", age: 23 });
// });

// using + symbol we can target the string which is present before the + symbol use the string multiple times in the url which give same result
// app.get("/ab+c", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Saha", age: 20 });
// });

//using of () we can target the sting inside the bracket
// app.get("/ab(dd)?c", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Avrodip", age: 30 });
// });

// Dynamic routing
// app.get("/user/:id/:name", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Avrodip", age: 30 });
// });

// app.get("/user", (req, res) => {
//   res.send({ name: "Avrodip", age: 30 });
// });

// app.post("/user", (req, res) => {
//   res.send("Data has been saved successfully");
// });

// app.put("/user", (req, res) => {
//   res.send("Overwrite the data successfully");
// });

// app.patch("/user", (req, res) => {
//   res.send("Data is updated successfully");
// });

// app.delete("/user", (req, res) => {
//   res.send("Data is deleted successfully");
// });

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
