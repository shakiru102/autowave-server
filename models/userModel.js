const { mongoose } = require("../modules");

 const userSchema =  mongoose.Schema({
     firstname: String,
     lastname: String,
     accountbalance: Number,
     phonenumber: String,
     cod: String,
     cardID: String,
     password: String,
 })

 const User = mongoose.model("user", userSchema)

 module.exports = User