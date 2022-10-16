const express = require("express");
//require('dotenv').config();
const app = express();
 require('./config/database.config');

app.use(express.json());
const usersRoute = require("./routes/users.route");

app.use("/jobs", usersRoute);

app.listen(8000, (err) => {
  if (err) console.log(err);
  console.log("Server started at port 8000");
 
});
