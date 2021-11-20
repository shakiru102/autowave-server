const { vonage } = require("../modules")

// const client  = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_TOKEN) 
const sms = new vonage({ 
    apiKey: process.env.VONAGE_APIKEY, 
  apiSecret: process.env.VONAGE_SECRET
}, { debug: true })


module.exports.sendsms =  (req, res) => {
    const { phonenumber, otp } = req.body
        const text = `Your Verification code: ${otp}`
        const to =  phonenumber
        const from = "Autowave"
    //     client.messages.create({body: text, from: '+3197010256190', to: to})
    //   .then(message => {
    //       console.log(message.sid)
    //       res.status(200).json({ otp })  
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //         res.send('message not sent')
    //     })
        
    //     console.log(to) 
        sms.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
            res.status(400).send('sms not sent')

        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
             res.status(200).json({ otp })  

            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                res.status(400).send('sms not sent')

            }
        }
       })
  
}