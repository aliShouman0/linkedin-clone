const mongoose = require("mongoose");
//process.env.DATABASE_URL
mongoose
  .connect("mongodb://127.0.0.1:27017/linkedin_db")
  .then(() => {
    console.log(":) database connected");
  })
  .catch((err) => {
    console.log("database error: ", err);
  });
