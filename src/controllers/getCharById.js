const { default: axios } = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(charId) =>{
  const {data} = await axios.get(URL+charId);
  const {id, status, name, species, origin, image,gender} = data;
  return {id, status, name, species, origin, image,gender};
}

module.exports = getCharById;