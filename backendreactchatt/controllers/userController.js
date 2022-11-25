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
  if (!req.body.username) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const user = await User.create({
    username: req.body.username,
  });

  res.status(200).json(user);
});

//@desc Update user
//@route Update /api/users/:id
//@access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

//@desc Delete user
//@route Detele /api/users/:id
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUsers,
  setUsers,
  updateUser,
  deleteUser,
};
