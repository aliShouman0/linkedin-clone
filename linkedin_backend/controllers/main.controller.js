const jobModel = require("../models/jobs.model");
const applicantModel = require("../models/applicants.model");

const map = (obb) => {
  let arr = [];
  obb.forEach((element, i) => {
    arr[i] = element.job_id;
  });
  return arr;
};

const getAllJobs = async (req, res) => {
  const { _id } = req.user;
  const applied = await applicantModel.find({ user_id: _id }).select("job_id");
  console.log(
    "applied ",
    applied.map((job) => job.job_id)
  );
  var result = map(applied);
  const jobs = await jobModel.find({
    _id: { $nin: result },
  });
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
    .then((job) => res.send(job))
    .catch((err) => res.status(400).send("Error"));
};

const applyForJob = async (req, res) => {
  const { _id } = req.user;
  const { job_id } = req.body;
  console.log(job_id);
  await applicantModel
    .create({ user_id: _id, job_id: job_id })
    .then((applicant) => res.send(applicant))
    .catch((err) => res.status(400).send(err));
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
  applyForJob,
};
