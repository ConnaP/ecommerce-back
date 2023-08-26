const mongoose = require("mongoose");
const generateToken = require("../helpers/generateToken");
const hashPassword = require("../helpers/hashPassword");

const User = mongoose.model("User");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const emailLowerCase = email.toLowerCase();
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!regexPassword.test(password)) {
    return res.status(401).json({
      message:
        "Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter",
    });
  }

  try {
    const hashedPassword = hashPassword(password);

    const user = new User({
      username,
      email: emailLowerCase,
      password: hashedPassword,
    });

    const resp = await user.save();

    const token = generateToken(resp);

    return res.status(201).json({
      message: "User created",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error,
    });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();

  const passwordHash = hashPassword(password);

  try {
    const userValidated = await User.findOne({ email: emailLowerCase });

    if (!userValidated) {
      return res.status(401).json({
        message: "Usuario no registrado",
      });
    }

    if (userValidated.password === passwordHash) {
      console.log(`coinciden`);
      const token = generateToken(userValidated);
      return res.status(200).json({
        message: "User logged in successfully",
        userId: userValidated._id,
        token,
      });
    } else {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const resp = await User.find();

    return res.status(200).json({
      message: "OK",
      detail: resp,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error,
    });
  }
};
const getUserById = async (req, res) => {
  const { _id } = req.params;

  try {
    const user = await User.findOne({ _id });

    if (user) {
      return res.status(200).json({
        message: "ok",
        detail: user,
      });
    }
    return res.status(404).json({
      message: "Not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

const updateUser = async (req, res) => {
  const { _id, userUpdated } = req.body;
  console.log(_id, userUpdated);
  try {
    const resp = await User.findByIdAndUpdate(_id, userUpdated, { new: true });
    return res.status(200).json({
      messege: "ok",
      detail: resp,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const res = await User.deleteMany();

    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error,
    });
  }
};
const deleteUserById = async (req, res) => {
  const { _id } = req.body;

  try {
    const resp = await User.findByIdAndDelete(_id);

    return res.status(200).json({
      messege: "ok",
      detail: resp,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error,
    });
  }
};


module.exports = {
  deleteUserById,
  deleteUsers,
  getUserById,
  getUsers,
  login,
  register,
  updateUser,
};
