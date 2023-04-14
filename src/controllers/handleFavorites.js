let myFavorites = [];

const postFav = (char) => {
  myFavorites.push(char);
  console.log(myFavorites);
  return myFavorites;
};
const deleteFav = (id) => {
  const search = myFavorites.find((fav) => {
    return fav.id == id;
  });
  if (!search) throw new Error("No existe ese personaje");
  myFavorites = myFavorites.filter((fav) => {
    return fav.id != id;
  });
  console.log(myFavorites);
  return myFavorites;
};
module.exports = { postFav, deleteFav };
