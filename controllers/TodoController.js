const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};
module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text })
    .then(() => res.set(201).send("Added successfully..."))
    .catch((err) => console.error(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.body;
  TodoModel.findByIdAndDelete({ id })
    .then(() => res.set(201).send("Deleted successfully..."))
    .catch((err) => console.error(err));
};
module.exports.updateTodo = async (req, res) => {
  const { id, text } = req.body;
  TodoModel.findByIdAndUpdate({ id, text })
    .then(() => res.set(201).send("Updated successfully..."))
    .catch((err) => console.error(err));
};
