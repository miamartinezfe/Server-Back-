const axios = require("axios").default;

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      return data;
    })
    .then((data) => {
      return {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
    })
    .then((objeto) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(objeto));
    })
    .catch((error) => {
      res.write(500, { "Content-Type": "text/plain" });
      res.end(error.message.toString());
    });
};
exports.getCharById = getCharById;
