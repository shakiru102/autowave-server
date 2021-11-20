const User = require('../models/userModel')
const { hashPassword, verifyPassword } = require('../utils/bcrypt')
module.exports.createuser = async (req, res) => {
    const { firstname, lastname, password, phonenumber, cod } = req.body
    try {
      const pass = await hashPassword(password)
    const user = await User.create({
        firstname,
        lastname,
        password: pass,
        accountbalance: 0,
        phonenumber: phonenumber,
        cod
    })
    res.status(200).json({ 
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id,
        accountbalance: user.accountbalance,
        phonenumber: user.phonenumber,
        cod: user.cod,
     })
        
    } catch (error) {
        res.status(400).send('could not create new user')
    }
}

module.exports.signin = async (req, res) => {
  const { phonenumber, password } = req.body
  try {
          const nphonenumber = parseInt(phonenumber, 10)
          const vphonenumber = await User.findOne({phonenumber: `${nphonenumber}`})
          if(!vphonenumber) throw  Error('User does not exist')
        const auth = await verifyPassword(password, vphonenumber.password)
        if(!auth) throw Error('Password is incorrect')
        res.status(200).json({
            firstname: vphonenumber.firstname,
            lastname: vphonenumber.lastname,
            _id: vphonenumber._id,
            phonenumber: vphonenumber.phonenumber,
            cod: vphonenumber.cod,
            accountbalance: vphonenumber.accountbalance
        })
  } catch (error) {
      res.status(400).send(error.message)
  }
}
module.exports.user = async (req, res) => {
   try {
       
      const person = await User.findById({_id: req.query.user})
      res.status(200).json({person}) 
   } catch (error) {
       console.log(error.message)
       res.send('Could not get user')
   }
}