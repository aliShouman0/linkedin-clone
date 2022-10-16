const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  company_id: {
    type: String,
    required: "name is company_id",
  },
  title: {
    type: String,
    required: "name is title",
  },
  description: {
    type: String,
    required: "name is description",
  },
});

const model = mongoose.model("jobs", jobSchema);

module.exports = model;
