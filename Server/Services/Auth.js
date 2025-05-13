const jwt = require('jsonwebtoken');

const setUser = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn:"1 days"});
}

const getUser = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    setUser, getUser
}