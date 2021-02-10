const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAdmin } = require("../controller/auth");

const { addTask, getAllTask, deleteTask } = require("../controller/task");

const { getUserById } = require("../controller/user");

//*multer area
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({
  storage: storage,
});

const { getTaskById } = require("../controller/task");

router.param("userId", getUserById);
router.param("taskId", getTaskById);

//*at first we will post a bunch of them, nothing is required for that
//*after that we will get all of them
//*after that we will try to select one and delete that

router.post(
  "/addtask",
  [
    check("name", "Name should be atleast 3 chars").isLength({ min: 3 }),
    check("address", "address is must").isLength({
      min: 3,
    }),
    check("phone", "phone number should be of 10 digits").isLength({
      min: 10,
    }),
  ],
  upload.single("photo"),
  addTask
);

router.get("/getalltask/:userId", isSignedIn, isAdmin, getAllTask);

router.delete("/deletetask/:userId/:taskId", isSignedIn, isAdmin, deleteTask);

module.exports = router;
