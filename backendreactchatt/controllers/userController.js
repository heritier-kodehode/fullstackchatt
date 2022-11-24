const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@desc GET user
//@route GET /api/users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

//@desc SET user
//@route SET /api/users
//@access Private
const setUsers = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const user = await User.create({
    username: req.body.text,
  });

  res.status(200).json({ message: "Set USERS" });
});

//@desc Update user
//@route Update /api/users/:id
//@access Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update USER ${req.params.id}` });
});

//@desc Delete user
//@route Detele /api/users/:id
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete USER" + req.params.id });
});

module.exports = {
  getUsers,
  setUsers,
  updateUser,
  deleteUser,
};
