const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating the schema here
const WorkSchema = new Schema(
  {
    photo: {
      url: String,
      filename: String,
    },
    msg: {
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
const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
