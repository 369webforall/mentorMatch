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
    console.log(id);
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    } else {
      return res.json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
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

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { First_name, last_name, email, mentor_id, mentee_id, sub } = req.body;

  try {
    await pool.query(query.updateUser, [
      First_name,
      last_name,
      email,
      mentor_id,
      mentee_id,
      sub,
      id,
    ]);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(query.deleteUser, [id]);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getUsers, getUserById, addUser, updateUser, deleteUser };
