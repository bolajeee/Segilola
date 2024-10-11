import mongoose from "mongoose";
import User from "../models/users.model.js";

export const createNewUser = async (req, res) => {
  const user = req.body;

  if (!user.name || !user.email || !user.password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      data: newUser,
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("error creating account", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

