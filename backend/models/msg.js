const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating the schema here
const MsgSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
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
const Msg = mongoose.model("Msg", MsgSchema);

module.exports = Msg;
