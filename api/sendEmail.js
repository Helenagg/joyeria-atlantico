const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${name}: ${subject}`,
            text: message,
            replyTo: email,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Correo enviado con éxito');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al enviar el correo');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
