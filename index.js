const { express, mongoose, env, cors } = require('./modules')

env.config()
// const { nanoid } = require('nanoid')
// const qr = require('qrcode')

// const code = `Autowave_${nanoid()}`

// qr.toDataURL(code, function (err, url) {
//     console.log(url)
//   })

mongoose.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(require('./routes/smsroutes'))
app.use(require('./routes/userroutes'))
app.use(require('./routes/transactionroutes'))
app.listen(PORT, () => console.log('listening on port ' + PORT))

app.get('/', (req, res) => {
    res.send('Server is runing on port ' + PORT)
})