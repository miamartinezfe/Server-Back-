const { Favorite } = require("../dataBase/DB_connection");

const deleteFav = async (id) => {
  const fav = await Favorite.findByPk(id);
  if (fav === null) throw new Error("No se encontro el favorito");
  fav.destroy();
  const favoritos = await Favorite.findAll();
  return favoritos;
};

module.exports = deleteFav;
