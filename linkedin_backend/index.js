const express = require("express");

const app = express();
app.use(express.json());
const usersRoute = require("./routes/users.route");

app.listen(8000, (err) => {
  if (err) console.log(err);
  console.log("Server started at port 8000");
});
