const jobModel = require("../models/jobs.model");

const getAllJobs = async (req, res) => {
  console.log("hi2");
  const jobs = await jobModel.find();
  res.send(jobs);
};

const getJob = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  jobModel.find({ id }).then((job) => res.send(job));
};

const addJob = async (req, res) => {
  await jobModel
    .create(req.body)
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send("Error"));
};

// const updateUser = async (req, res) => {
//   const { id } = req.body;
//   jobModel
//     .findByIdAndUpdate(id, req.body)
//     .then((user) => res.send(user))
//     .catch((err) => res.status(400).send(err));
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.body;
//   jobModel.findByIdAndRemove(id).then((user) => res.send(user));
// };

module.exports = {
  getAllJobs,
  getJob,
  addJob,
};
