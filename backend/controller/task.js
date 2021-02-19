const Task = require("../models/task");

/*
 *tasks are the pickups we have to do. so we have 3 options here,
 *1) that we put a task from frontend
 *2) delete a task from frontend
 *3) get all task
 *4) get task by id
 */

//*get task by id
exports.getTaskById = (req, res, next, id) => {
  Task.findById(id).exec((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: `No task was found in DB`,
      });
    }
    req.task = task; //*we are attaching the user data to req
    next();
  });
};

//*adding a new task
exports.addTask = (req, res) => {
  //yha pr sb ko assign krna pdta hai bro.
  const data = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    photo: {
      url: req.file.path,
      filename: req.file.filename,
    },
  };

  const task = new Task(data);
  console.log(task);
  task.save((err, task) => {
    if (err) {
      console.log("Error from task controller");
      return res.status(400).json({
        error: "NOT able to save task in DB",
      });
    }
    console.log("Task is saved from task controller");
    res.json({ task });
  });
};

//*deleting the task now
exports.deleteTask = (req, res) => {
  const task = req.task;
  task.remove((err, task) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this Task",
      });
    }
    res.json({
      message: "successfully deleted",
    });
  });
};

//*getall
exports.getAllTask = (req, res) => {
  Task.find().exec((err, task) => {
    if (err) {
      console.log("No task sent from task controller");
      return res.status(400).json({
        error: "No Task Available",
      });
    }
    console.log("Task sent to frontend from controller");
    res.json({ task });
  });
};
