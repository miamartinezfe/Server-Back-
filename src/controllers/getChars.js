const { Favorite } = require("../dataBase/DB_connection");

const getChars = async () => {
  const favoritos = await Favorite.findAll();
  return favoritos;
};

module.exports = getChars;