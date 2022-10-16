const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  company_id: String,
  title: String,
  description: String,
});

const model = mongoose.model("jobs", jobSchema);

module.exports = model;
