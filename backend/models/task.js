const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating the schema here
const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      url: String,
      filename: String,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

//model
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
