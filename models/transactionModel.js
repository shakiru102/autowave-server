const { mongoose } = require("../modules");

 const transactionSchema =  mongoose.Schema({
     date: { type: Date, default:  Date.now()},
     amount: Number,
     transaction: String,
     ref: String,
     userId: String,
     msg: String
 })

 const Transaction = mongoose.model("transactions", transactionSchema)

 module.exports = Transaction