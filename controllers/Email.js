const { transporter } = require("./Email.config");

const sendMailRequest = async (options) => {
    try {
        const response = await transporter.sendMail({
            from: `<${options.from}>`,
            to: options.to, // Correctly use `options.to` for the recipient email
            subject: options.subject,
            html: options.html, // Use `html` for HTML email content
            attachments:options.attachments
        });

        console.log(`Successfully sent mail to ${options.to}`);
    } catch (error) {
        console.error("Error sending verification email:", error.message);
        throw new Error("Could not send verification email.");
    }
};

module.exports = { sendMailRequest };
