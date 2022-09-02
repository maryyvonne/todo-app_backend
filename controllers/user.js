import User from "../models/User.js";
import Task from "../models/Task.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Users = await User.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};


export const getUserTasks = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    const list = await Promise.all(
      User.tasks.map((task) => {
        return Task.findById(task);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const getUserNotes = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    const list = await Promise.all(
      User.notes.map((note) => {
        return Note.findById(note);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
