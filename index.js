const server = require("./src/server");
const PORT = 3001;

server.listen(PORT, () => {
  console.log("runing on port 3001");
});

module.exports = server;
