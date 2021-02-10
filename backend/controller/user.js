const User = require("../models/user");

//*used for getting the user if we have only the id present
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user; //*we are attaching the user data to req
    next();
  });
};
