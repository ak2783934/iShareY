const Work = require("../models/work");

/*
 *So we are in the work part, which is to be uploaded by admins and it will be reflected in the homepage
 *So here also, we have 3 works
 *1) delete
 *2) get
 *3) put
 *4) getworkbyId
 */

exports.getWorkById = (req, res, next, id) => {
  Work.findById(id).exec((err, work) => {
    if (err || !work) {
      return res.status(400).json({
        error: `No work was found in DB`,
      });
    }
    req.work = work; //*we are attaching the work data to req
    next();
  });
};

//*adding a work
exports.addWork = (req, res) => {
  const data = {
    msg: req.body.msg,
    photo: {
      url: req.file.path,
      filename: req.file.filename,
    },
  };

  const work = new Work(data);
  work.save((err, work) => {
    if (err) {
      console.log("Couldn't add work: work controller");
      return res.status(400).json({
        msg: "Couldn't upload the work :(",
      });
    }
    console.log("Work added: work controller");
    res.json({ work });
  });
};

//*deleting the work
exports.deleteWork = (req, res) => {
  const work = req.work;
  work.remove((err) => {
    if (err) {
      console.log("Couldn't delete work controller");
      return res.status(400).json({
        msg: "Couldn't delete the work",
      });
    }
    console.log("Delete successs work controller");
    res.json({
      msg: "Work deleted successfully",
    });
  });
};

//*getting all the works
exports.getAllWork = (req, res) => {
  Work.find().exec((err, work) => {
    if (err) {
      console.log("couldn't fetch all work controller");
      return res.status(400).json({
        msg: "couldn't get all the works",
      });
    }
    console.log("All work out controller");
    res.json({ work });
  });
};
