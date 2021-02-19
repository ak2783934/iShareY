const mongoose = require("mongoose");
const Msg = require("../models/msg");

/*
 *Msgs are the suggestion or the communication form the users so we have 3 options here
 *1) that we put a Msg from frontend
 *2) delete a Msg from frontend after reading
 *3) get all Msg
 *4) get msg by id(most nessesary one)
 */

//*get msg by id
exports.getMsgById = (req, res, next, id) => {
  Msg.findById(id).exec((err, msg) => {
    if (err || !msg) {
      return res.status(400).json({
        error: `No msg was found in DB ${id}`,
      });
    }
    req.msg = msg; //*we are attaching the user data to req
    next();
  });
};

//*adding a new msg
exports.addMsg = (req, res) => {
  const msg = new Msg(req.body);
  msg.save((err, msg) => {
    if (err) {
      console.log("msg couldn't be saved form msg controller");
      return res.status(400).json({
        error: "NOT able to save msg in DB" + err,
      });
    }
    console.log("Msg saved form msg controller");
    res.json({ msg });
  });
};

//*deleting the msg now
exports.deleteMsg = (req, res) => {
  const msg = req.msg;
  msg.remove((err, msg) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this Msg",
      });
    }
    res.json({
      message: "successfully deleted",
    });
  });
};

//*getall
exports.getAllMsg = (req, res) => {
  Msg.find().exec((err, msg) => {
    if (err) {
      return res.status(400).json({
        error: "No msg Available",
      });
    }
    res.json({ msg });
  });
};
