const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "name is email",
  },
  location: {
    type: String,
    required: "name is location",
  },
  date: {
    type: String,
    required: "name is location",
  },
  photo: {
    type: String,
    required: "name is photo",
  },
  pasword: {
    type: String,
    required: "name is pasword",
  },
  degree: String,
  experience: String,

  type: String,
  description: String,

});

const model = mongoose.model("user", userSchema);

module.exports = model;
