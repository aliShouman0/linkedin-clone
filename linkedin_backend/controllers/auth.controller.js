const User = require("../models/users.model");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  res.send("login");
};
const signup = async (req, res) => {
  const {
    name,
    email,
    location,
    date,
    photo,
    user_type,
    password,
    degree,
    experience,
    company_type,
    description,
  } = req.body;
  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.location = location;
    user.date = date;
    user.photo = "NA";
    user.user_type = user_type;
    user.password = password;
    user.degree = degree;
    user.experience = experience;
    user.company_type = company_type;
    user.description = description;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  login,
  signup,
};

