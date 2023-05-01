const { Favorite } = require("../dataBase/DB_connection");

const postFav = async (id, name, origin, status, image, species, gender) => {
  const newFav = await Favorite.findOrCreate({
    where: { id },
    defaults: {
      name,
      origin,
      status,
      image,
      species,
      gender,
    },
  });
  const favoritos = await Favorite.findAll();
  return favoritos;
};

module.exports = postFav;
