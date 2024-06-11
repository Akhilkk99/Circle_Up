const nodemailer = require('nodemailer');

exports.sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false, 
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASSWORD
            },
            tls: {
                ciphers: 'SSLv3'
            }
        });

        const mailOptions = {
            from: process.env.AUTH_EMAIL, 
            to: options.email, 
            subject: options.subject, 
            text: options.message 
        };

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email" };
    }
};

