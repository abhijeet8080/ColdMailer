# ColdMailer

ColdMailer is a Node.js application designed to automate the process of sending personalized cold emails for job applications. It allows users to send customized emails with attachments to multiple recipients while tracking the sending status.

## Features

- Automated email sending with personalized content
- Support for HTML email templates
- Attachment handling (PDF resumes)
- Email tracking and status management
- Configurable email templates
- Environment variable support for sensitive data

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- SMTP email account (Gmail recommended)
- PDF resume file

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ColdMailer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
SMTP_MAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
PORT=5000
```

4. Configure your recipient details in `details.json`:
```json
[
  {
    "name": "Recipient Name",
    "company_name": "Company Name",
    "role": "Position",
    "mail_id": "recipient@email.com",
    "mail_sent": false
  }
]
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. The application will automatically:
   - Read recipient details from `details.json`
   - Send personalized emails to recipients
   - Update the sending status in the JSON file
   - Track sent emails in `sent.json`

## Project Structure

- `app.js` - Main application file
- `mail.js` - Email template configuration
- `controllers/` - Contains email sending logic
- `details.json` - Recipient information
- `sent.json` - Tracking of sent emails
- `config.env` - Environment configuration

## Dependencies

- express: ^4.21.1
- nodemailer: ^6.9.16
- dotenv: ^16.4.5
- xlsx: ^0.18.5
- @google/generative-ai: ^0.21.0

## Security Notes

- Never commit your `.env` file
- Use app-specific passwords for Gmail
- Keep your `details.json` file secure
- Regularly update your dependencies

## License

ISC License

## Author

Abhijeet Kadam
- Email: kadamabhijeet021@gmail.com
- LinkedIn: [Abhijeet Kadam](https://www.linkedin.com/in/abhijeetkadam21/)
- GitHub: [abhijeet8080](https://github.com/abhijeet8080)
- Portfolio: [abhijeet-kadam.vercel.app](https://abhijeet-kadam.vercel.app/) 