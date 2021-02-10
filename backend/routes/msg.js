const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAdmin } = require("../controller/auth");
const { addMsg, deleteMsg, getAllMsg } = require("../controller/msg");
//*here we can only handle the functions which are addMsg,deleteMsg,getAllMsg

const { getUserById } = require("../controller/user");
const { getMsgById } = require("../controller/msg");

router.param("userId", getUserById);
router.param("msgId", getMsgById);

router.post(
  "/addmsg",
  [
    check("name", "Name should be atleast 3 chars").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("msg", "Should have one word at least").isLength({
      min: 3,
    }),
  ],
  addMsg
);

router.get("/getallmsg/:userId", isSignedIn, isAdmin, getAllMsg);

router.delete("/deletemsg/:userId/:msgId", isSignedIn, isAdmin, deleteMsg);

module.exports = router;
