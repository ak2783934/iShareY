const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { signUp, signIn, signOut } = require("../controller/auth");

//*here we can only handle hte functions which are signUp,signIn,signOut

router.post(
  "/signup",
  [
    check("username", "Name should be atleast 3 chars").isLength({
      min: 3,
    }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signUp
);
router.post(
  "/signin",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password field is required").isLength({
      min: 3,
    }),
  ],
  signIn
);

router.get("/signout", signOut);

module.exports = router;
