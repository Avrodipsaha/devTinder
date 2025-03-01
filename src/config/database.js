const mongoose = require("mongoose");

const connecteDb = async () => {
  await mongoose.connect(
    "mongodb+srv://avrodipsaha1111:rLeXFdXgR5jrx4TK@avrodev.sts14.mongodb.net/devTinder"
  );
};

module.exports = connecteDb;
