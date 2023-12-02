import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
//@route   GET /api/users/login
//@desc    GET Auth User and get token
//@access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@route   POST /api/users
//@desc    Register User
//@access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@route   POST /api/users/logout
//@desc    Logout the User and clear the cookie
//@access  Private
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ Message: "Successfuly Logged out" });
});

//@route   GET /api/users/profile
//@desc    Get User Profile
//@access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User doesn't exist");
  }
});

//@route   PUT /api/users/profile
//@desc    Update User data
//@access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.user.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@route   GET /api/users
//@desc    Get Users
//@access  Private/admin
export const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

//@route   GET /api/user/:id
//@desc    Get User by ID
//@access  Private/admin
export const getUserById = asyncHandler(async (req, res) => {
  res.send("Get User by Id");
});

//@route   DELETE /api/users/:id
//@desc    Delete User
//@access  Private/admin
export const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User");
});

//@route   PUT /api/users/:id
//@desc    Update User
//@access  Private/admin
export const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});
