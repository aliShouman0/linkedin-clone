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
  console.log("a", req.user);
  const applied = await applicantModel.find({ user_id: _id }).select("job_id");
  let result = map(applied);
  const jobs = await jobModel.find({
    _id: { $nin: result },
  });
  res.send(jobs);
};

const getApplicant = async (req, res) => {
  const { id } = req.params; 
  applicantModel.find({job_id: id }).select("user_id").then((job) => res.send(job));
  res.send(job)
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
  await applicantModel
    .create({ user_id: _id, job_id: job_id })
    .then((applicant) => res.send(applicant))
    .catch((err) => res.status(400).send(err));
};

const getApplicants = async (req, res) => {
  const { _id } = req.user;
  console.log(_id)
  const jobs = await jobModel.find({ company_id: _id });
  res.send(jobs);
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
  addJob,
  applyForJob,
  getApplicants,
  getApplicant
};
