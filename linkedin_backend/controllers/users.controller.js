const userModel = require("../models/users.model");
const followModel = require("../models/follows.model");

// const updateUser = async (req, res) => {
//   const { id } = req.body;
//   jobModel
//     .findByIdAndUpdate(id, req.body)
//     .then((user) => res.send(user))
//     .catch((err) => res.status(400).send(err));
// };

const getUser = async (req, res) => {
  const { id } = req.params;
  userModel.findOne({ _id: id }).then((user) => res.send(user));
};

const follow = async (req, res) => {
  const { _id } = req.user;
  const { company_id } = req.body;
  await followModel
    .create({ user_id: _id, company_id: company_id })
    .then((follow) => res.send(follow))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getUser,
  follow,
};
