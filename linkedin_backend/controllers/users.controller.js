const userModel = require("../models/users.model");
const followModel = require("../models/follows.model");
const jobModel = require("../models/jobs.model");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  password = await bcrypt.hash(req.body.password, 10);
  userModel
    .findByIdAndUpdate(_id, { ...req.body, password })
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
};
 

const follow = async (req, res) => {
  const { _id } = req.user;
  const { company_id } = req.body;
  await followModel
    .create({ user_id: _id, company_id: company_id })
    .then((follow) => res.send(follow))
    .catch((err) => res.status(400).send(err));
};

const isfollow = async (req, res) => {
  const { company_id } = req.params;
  const { _id } = req.user;

  await followModel
    .findOne({ user_id: _id, company_id })
    .then((job) => res.send(job));
};

const map = (obb) => {
  let arr = [];
  obb.forEach((element, i) => {
    arr[i] = element.company_id;
  });
  return arr;
};

const getNotification = async (req, res) => {
  const { _id } = req.user;
  const follows = await followModel.find({ user_id: _id }).select("company_id");
  let result = map(follows);
  const notification = await jobModel.find({
    company_id: { $in: result },
  });
  res.send(notification);
};

module.exports = {
  getUser,
  follow,
  isfollow,
  updateUser,
  getNotification,
};
