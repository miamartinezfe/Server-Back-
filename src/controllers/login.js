const users = require('../utils/users');

const login = (email,pass) => {
    const user = users.find((user)=> email===user.email && pass===user.password)
    return !!user;
}
     
module.exports = login;