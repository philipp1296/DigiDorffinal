const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

// set schema for login
const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

// validate logindata (email, password correct?)
router.post("/", validateWith(schema), (req, res) => {
  const { email, password } = req.body;
  const user = usersStore.getUserByEmail(email);

  // check if email and password is correct
  if (!user || user.password !== password)
    return res.status(400).send({ error: "Invalid email or password." });

  // create and enrypt user token
  const token = jwt.sign(
    { userId: user.id, name: user.name, email, type: user.type },
    "jwtPrivateKey"
  );
  res.send(token);
});

module.exports = router;
