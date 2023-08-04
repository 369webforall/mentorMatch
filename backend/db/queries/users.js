const getUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE id = $1";

const checkEmailExists = "SELECT u FROM Users u WHERE u.email = $1";

const addUser =
  "INSERT INTO users (First_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = { getUsers, getUserById, checkEmailExists, addUser };
