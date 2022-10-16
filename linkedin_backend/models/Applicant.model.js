const mongoose = require("mongoose");

const applicantSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: "user id is required",
  },
  job_id: {
    type: String,
    required: "job id is required",
  } 
});

const model = mongoose.model("Applicant", applicantSchema);

module.exports = model;
