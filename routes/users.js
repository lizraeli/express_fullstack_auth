let db = require("../db/queries");
var express = require("express");
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.post("/new", db.createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user;
  res.json(req.user);
});

router.get("/logout", loginRequired, db.logoutuser);

router.get("/hobbies", loginRequired, db.getUserHobbies);
router.patch("/hobbies", loginRequired, db.updateUserHobbies);

module.exports = router;
