const { transporter } = require("./Email.config");


const sendMailRequest = async(options) =>{
    try {
        const response = await transporter.sendMail({
            from: `<${process.env.SMTP_MAIL}>`, // Correct 'from' format
            to: options.mail, // Receiver's email
            subject: options.subject, // Subject line
            text: options.text, // Plain text body
          });

          console.log(`Successfully sent mail to ${options.mail}`)
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error("Could not send verification email.");
    }
}

module.exports = {sendMailRequest};