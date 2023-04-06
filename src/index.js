const http = require("http");
const fs = require("fs");
const PORT = 3001;
const data = require ("./utils/data");

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
        const char = data.filter((char) => {
            return char.id === id;
          });       
        res.writeHead(200, { "contentType": "application/json" });
        res.end(JSON.stringify(char[0]));
        return;
      }

      default:
        res.writeHead(404, { contentType: "text/plain" });
        res.end("No existe la url");
        return;
    }
  })
  .listen(PORT, "localhost");
