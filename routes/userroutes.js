const { createuser, signin, user } = require('../controllers/userController')
const { express } = require('../modules')

const route = express.Router()
route.post('/createuser', createuser)
route.post('/signin', signin)
route.get('/user', user)

module.exports = route