const { bcrypt } = require("../modules")

const hashPassword = async pass => {
    const salt = await bcrypt.genSalt()
    return  bcrypt.hash(pass, salt)
}

const verifyPassword = async (pass, hashedpass ) => await bcrypt.compare(pass, hashedpass)

module.exports = {
    hashPassword,
    verifyPassword,
}