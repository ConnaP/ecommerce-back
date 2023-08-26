const express = require("express");

const router = express.Router();

const {
  register,
  updateUser,
  deleteUsers,
  deleteUserById,
  getUsers,
  getUserById,
  login
} = require("../controllers/User.controller");

const auth = require("../middlewares/auth");

router.get("/get-all", getUsers);
router.get("/id/:_id", auth, getUserById);

router.post("/register", register);

router.put("/", updateUser);

router.delete("/delete-all", deleteUsers);
router.delete("/id/:_id", auth, deleteUserById);

router.post("/login", login);

module.exports = router;
