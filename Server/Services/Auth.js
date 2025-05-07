const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const setUser = (user) => {
    return jwt.sign(user, secret, {expiresIn:"1 days"});
}

const getUser = (token) =>{
    return jwt.verify(token, secret);
}

module.exports = {
    setUser, getUser
}