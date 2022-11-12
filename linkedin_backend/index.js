const express = require("express");
require("dotenv").config();
require("./config/database.config");
const jobsRoute = require("./routes/jobs.route");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/users.route");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/job", jobsRoute);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
});
