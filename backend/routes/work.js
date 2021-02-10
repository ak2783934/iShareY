const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAdmin } = require("../controller/auth");

const { addWork, getAllWork, deleteWork } = require("../controller/work");

const { getUserById } = require("../controller/user");

//*multer area
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({
  storage: storage,
});

const { getWorkById } = require("../controller/work");

router.param("userId", getUserById);
router.param("workId", getWorkById);

/*
 *Now again we have to do the 3 things
 *I'll just try to copy them as of now
 */

router.post(
  "/addwork/:userId",
  [
    check("msg", "address is must").isLength({
      min: 3,
    }),
  ],
  isSignedIn,
  isAdmin,
  upload.single("photo"),
  addWork
);

router.get("/getallwork", getAllWork);

router.delete("/deletework/:userId/:workId", isSignedIn, isAdmin, deleteWork);

module.exports = router;
