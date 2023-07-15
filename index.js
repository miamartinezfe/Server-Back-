const server = require("./src/server");
const { conn } = require('./src/dataBase/DB_connection');
const port = process.env.PORT ;

server.listen(port, () => {
  console.log(`runing on port ${port}`);
  conn.sync({force: true});
});

module.exports = server;
