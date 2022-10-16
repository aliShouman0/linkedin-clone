const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  company_id: {
    type: String,
    required: "company_id is required",
  },
  title: {
    type: String,
    required: "title is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
});

const model = mongoose.model("Job", jobSchema);

module.exports = model;
