const db = require("../db/connection");
const query = require("../db/queries/users");
const getUsers = (req, res) => {
  db.query(query.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(query.getUserById, [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addUser = (req, res) => {
  const { First_name, last_name, email, mentor_id, mentee_id, sub } = req.body;
  //check if email exist
  db.query(query.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }
    db.query(
      query.addUser,
      [First_name, last_name, email, mentor_id, mentee_id, sub],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("User created sucessfully!");
      }
    );
  });
};

module.exports = { getUsers, getUserById, addUser };
