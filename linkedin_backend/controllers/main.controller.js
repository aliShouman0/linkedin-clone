const userModel = require("../models/users.model");
const jobModel = require("../models/jobs.model");

const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find();
  res.send(jobs);
};

const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await jobModel.find({ id });
  res.send(job);
};

const addJob = async (req, res) => {
  const job = await jobModel.find(req.body);
  res.send(job);
};

module.exports = {
  getAllJobs,
  getJob,
  addJob,
};
