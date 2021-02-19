const User = require("../models/user");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");
/*
*This is the most complex controller
*here we have to take care of everything that is going to make a user authenticated

*signup
*signin
*signout
*isAdmin
*isSignedIn
*/

exports.signUp = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  // console.log(user);
  user.save((err, user) => {
    if (err) {
      console.log("Error from auth controller for signup, failed");
      return res.status(400).json({
        msg: "Couldn't sign up " + err,
      });
    }
    console.log("signup is successfull now from auth controller");
    res.json({
      username: user.username,
      email: user.email,
      id: user._id,
      password: user.password,
    });
  });
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  User.findOne({ email }, (err, user) => {
    if (err || user === null) {
      return res.status(400).json({
        msg: "this email is not available in DB",
      });
    }

    user.matchPassword(password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ _id: user._id }, process.env.secret);
        res.cookie("tkn", token, { expire: new Date() + 9999 });
        const { username, email, id, isAdmin } = user;
        console.log("SignIn successfull from auth controller");
        return res.json({ token, user: { username, email, id, isAdmin } });
      } else {
        console.log("SignIn Failed from auth controller");
        return res.status(401).json({
          msg: "Invalid password",
        });
      }
    });
  });
};

exports.signOut = (req, res) => {
  res.clearCookie("tkn");
  res.json({
    message: "User signed out!",
  });
};

//*middleweres

exports.isSignedIn = expressJwt({
  secret: process.env.secret,
  algorithms: ["sha1", "RS256", "HS256"],
  userProperty: "auth",
});

exports.isAdmin = (req, res, next) => {
  console.log("isAdmin called ????");
  if (!req.profile.isAdmin) {
    return res.status(403).json({ error: "you are not admin: ACCESS DENIED" });
  }
  next();
};
