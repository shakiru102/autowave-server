const { savetransaction, transaction } = require('../controllers/transactionController')
const { express } = require('../modules')

const route = express.Router()
route.post('/savetransaction', savetransaction)
route.get('/transaction', transaction)
module.exports = route