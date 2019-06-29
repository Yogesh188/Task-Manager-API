const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 
const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'agarwal.yashyogesh11@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome ${name}.`
    })
}

const sendCancellationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'agarwal.yashyogesh11@gmail.com',
        subject: 'Successful Account Deletion',
        text: `Goodbye ${name}.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

