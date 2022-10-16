const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: "user id is required",
  },
  company_id: {
    type: String,
    required: "company id is required",
  },
});

const model = mongoose.model("follow", followSchema);

module.exports = model;
