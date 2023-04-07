const http = require("http");
const PORT = 3001;
const {getCharById} = require("./controllers/getCharById");

exports.modules = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //permitimos request de todo el mundo
    const { url } = req;
    if (url.includes("/rickandmorty/character/")) {
      const aux = url.split("/");
      var id = Number(aux[aux.length - 1]);
    }
    switch (url) {
      case `/rickandmorty/character/${id}`: {
        getCharById(res,id);
        return;
      }

      default:
        res.writeHead(404, { contentType: "text/plain" });
        return res.end("No existe la url");
    }
  })
  .listen(PORT, "localhost");
