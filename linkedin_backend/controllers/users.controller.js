const userModel = require("../models/users.model");

// const updateUser = async (req, res) => {
//   const { id } = req.body;
//   jobModel
//     .findByIdAndUpdate(id, req.body)
//     .then((user) => res.send(user))
//     .catch((err) => res.status(400).send(err));
// };

const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  userModel.findOne({ _id: id }).then((user) => res.send(user));
};

module.exports = {
  //   getAllJobs,
  //   getJob,
  //   addJob,
  getUser,
};
