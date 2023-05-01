const { User } = require("../dataBase/DB_connection");

const login = async (email, password) => {
  const user = await User.findAll({
    where: { email, password },
  });
  return user;
};

module.exports = login;