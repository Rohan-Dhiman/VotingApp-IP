const bcrypt = require('bcrypt');

const encryptString = async (myPlaintextPassword) =>{
    const SALT =await parseInt(process.env.SALT, 10);
    const salt = await bcrypt.genSalt(SALT);
    const newString = await bcrypt.hash(myPlaintextPassword, salt);
    return newString;
}
const compareEncrypted = async (string, hashedString) =>{
    const isMatch = await bcrypt.compare(string, hashedString);
    return isMatch;
}

module.exports = {
    encryptString,
    compareEncrypted
}