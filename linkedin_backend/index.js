const express = require("express");
require("dotenv").config();
require("./config/database.config");
const usersRoute = require("./routes/jobs.route");
const authRoutes = require('./routes/auth.route');

const app = express();

app.use(express.json());

app.use("/jobs", usersRoute);
app.use('/auth', authRoutes)

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
});
