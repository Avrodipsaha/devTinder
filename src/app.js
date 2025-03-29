const express = require("express");
const app = express();
const connecteDb = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");

app.use(express.json()); //middleware to parse the incoming request with JSON payload
app.post("/signup", async (req, res) => {
  //create new user instance using req.body
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Signup successful");
  } catch (err) {
    res.status(400).send("Unable to signup: " + err);
  }
});

// find user by email
app.get("/user", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong: " + err);
  }
});

// get all users for feed
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Someting went wrong: " + err);
  }
});

// delete user by id
app.delete("/user", async (req, res) => {
  try {
    const id = req.body.id;
    await User.findByIdAndDelete(id);
    // await User.findByIdAndDelete({_id: id});
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Someting went wrong: " + err);
  }
});

// update user data to database by id
app.patch("/user/:userId", async (req, res) => {
  try {
    const userId = req.params?.userId;
    const updateData = ["age", "skills", "gender"];
    const data = req.body;
    const isValidData = Object.keys(data).every((key) =>
      updateData.includes(key)
    );
    if (!isValidData) {
      return res.status(400).send("Invalid data to update");
    }
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User data updated successfully");
  } catch (err) {
    res.status(400).send("Someting went wrong: " + err);
  }
});

// connecting database first and starting server
connecteDb()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(4444, () => {
      console.log("listening on port 4444...");
    });
  })
  .catch((err) => {
    console.log("we not able to connect with database");
    console.log(err);
  });

// -----------------------------Note sections-----------------------------
// const { adminAuth, userAuth } = require("./middlewares/auth");

// --- Error handling middleware (use this end of the code) ---
// app.use("/", (error, req, res, next) => {
//   if (error) {
//     res.status(500).send("There was a server side error!");
//   }
// });
//--- implement the adminAuth & userAuth middleware for the admin route-------
// app.use("/admin", adminAuth);

// app.get("/user/login", userAuth, (req, res) => {
//   res.send("User login successful");
// });

// app.get("/admin/allData", (req, res) => {
//   res.send("Send all data");
// });

// app.delete("/admin/deleteData", (req, res) => {
//   res.send("Delete all data from database");
// });

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

// -----------------database connection-------------------
// //create new user instance manually
// const user = new User({
//   firstName: "Avrodip",
//   lastName: "Saha",
//   email: "avrodip@saha.com",
//   password: 1234567890,
// });
