const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
  },
  location: {
    type: String,
    required: "location is required",
  },
  date: {
    type: String,
    required: "date is required",
  },
  photo: String,
  user_type: {
    type: String,
    required: "user_type is required",
  },
  pasword: {
    type: String,
    required: "pasword is required",
  },
  degree: String,
  experience: String,

  company_type: String,
  description: String,
});

const model = mongoose.model("User", userSchema);

module.exports = model;
