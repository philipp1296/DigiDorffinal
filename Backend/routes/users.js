const express = require("express");
const router = express.Router();
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

// set schema for registration and pass requirements
const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  type: Joi.string().required(),
};

// check registration data (email already in use?)
router.post("/", validateWith(schema), (req, res) => {
  const { name, email, password, type } = req.body;
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: "Es existiert bereits ein User mit dieser E-Mail" });

  // store new user if okay
  const user = { name, email, password, type };
  usersStore.addUser(user);

  res.status(201).send(user);
});

// get all users
router.get("/", (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
