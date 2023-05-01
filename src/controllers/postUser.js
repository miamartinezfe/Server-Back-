const { User } = require("../dataBase/DB_connection");

const postUser = async (email, password) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      password,
    },
  });
  return [user, created];
};

module.exports = postUser;
