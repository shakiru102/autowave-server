const Transaction = require("../models/transactionModel")
const { countDocuments } = require("../models/userModel")
const User = require("../models/userModel")

module.exports.savetransaction = async (req, res) => {
    try {
         await Transaction.create(req.body)
         const user = await User.findById({_id: req.body.userId})
         console.log(req.body.amount, user.accountbalance)
         const num = parseInt(req.body.amount)
         const amount = num + user.accountbalance
         await User.updateOne({_id: req.body.userId}, { accountbalance: amount })
         res.send('ok')
    } catch (error) {
        res.send('Error has occurred while trying to save transaction')
    }

}
module.exports.transaction = async (req, res) => {
    console.log(req.query.user)
    try {
       const transaction = await Transaction.find({ userId: req.query.user })
       console.log(transaction)
       res.status(200).json({ transaction }) 
    } catch (error) {
        res.send('Could not get list of transactions')
    }
 }

 module.exports.charge = async (req, res) => {
    const { cardID, amount, transaction } =  req.body
    console.log(req.body)
    try {
        const user = await User.findOne({ cardID })
        await Transaction.create({
            amount,
            transaction,
            userId: user._id,
        })
        const num = parseInt(amount)
        if(user.accountbalance == 0) throw Error('Insufficient fund')
        const balance = user.accountbalance - num  
        await User.updateOne({ cardID }, { accountbalance: balance })
        res.status(200).send('ok')
   } catch (error) {
       console.log(error.message)
       res.status(400).send(error.message)
   }
 
 }