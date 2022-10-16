const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
   
  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(404).json({ message: "Invalid Credentials" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });

  const token = jwt.sign(
    { email: user.email, name: user.name, userType: user.user_type },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30m",
    }
  );
  res.status(200).json({user ,token});
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
    user.password = await bcrypt.hash(password, 10)
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
