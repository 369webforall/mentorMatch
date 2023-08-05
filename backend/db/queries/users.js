const getUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE userid = $1";

const checkEmailExists = "SELECT u FROM Users u WHERE u.email = $1";

const addUser =
  "INSERT INTO users (First_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

const updateUser = `
      UPDATE users
      SET first_name = $1, last_name = $2, email = $3, mentor_id = $4, mentee_id = $5, sub = $6
      WHERE userid = $7
    `;

const deleteUser = `
      DELETE FROM users
      WHERE userid = $1
    `;

module.exports = {
  getUsers,
  getUserById,
  checkEmailExists,
  addUser,
  updateUser,
  deleteUser,
};
