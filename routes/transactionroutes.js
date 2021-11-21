const { savetransaction, transaction, charge } = require('../controllers/transactionController')
const { express } = require('../modules')

const route = express.Router()
route.post('/savetransaction', savetransaction)
route.get('/transaction', transaction)
route.post('/charge', charge)
module.exports = route