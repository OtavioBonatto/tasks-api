const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'otaviobonatto92@gmail.com',
        subject: 'Obrigado por se registrar',
        text: `Bem vindo ao site, ${name}. Deixe-nos sabendo como esta sendo a experiencia no site.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'otaviobonatto92@gmail.com',
        subject: 'Cancelamento de conta',
        text: `É uma pena que você tenha cancelado sua conta, ${name}, gostaria de nos informar o motivo?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}