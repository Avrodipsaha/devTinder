const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get("/user/login", userAuth, (req, res) => {
  res.send("User login successful");
});

app.get("/admin/allData", (req, res) => {
  res.send("Send all data");
});

app.delete("/admin/deleteData", (req, res) => {
  res.send("Delete all data from database");
});

//-----multiple route handing----------
// app.use(
//   "/user",
//   [
// --------below this is example of middleware--------
//     (req, res, next) => {
//       console.log("User middleware");
//       next();
//     },
// ----below this is example of route handling---- which is used to send response to the client
//     (req, res, next) => {
//       console.log("User middleware 1");
//       res.send("User route");
//       next();
//     },
//   ],
//   (req, res, next) => {
//     // res.send("User route 2");
//     console.log("User middleware 2");
//     next();
//   }
// );

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

// -----Dynamic routing----
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
