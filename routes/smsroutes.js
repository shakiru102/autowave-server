const { sendsms } = require('../controllers/smsController')
const { express } = require('../modules')

const route = express.Router()
route.post('/sendsms', sendsms)

module.exports = route