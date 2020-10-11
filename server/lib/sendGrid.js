require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (email) => {

   let emailMsg = {
       to: email,
       from: "sarinaburch52@gmail.com",
       html:
       ``
   }

    sgMail.send(emailMsg)
        .then(() => {
            console.log("Email Sent")
        })
        .catch(err => {
            console.log(err)
        })
}