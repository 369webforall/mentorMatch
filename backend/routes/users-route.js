/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  addUser,
} = require("../controllers/user-controller");

router.get("/", getUsers); // http://localhost:8080/api/users
router.post("/", addUser); // http://localhost:8080/api/users
router.get("/:id", getUserById); // http://localhost:8080/api/users/1

module.exports = router;
