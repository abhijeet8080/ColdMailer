const express = require("express");
const { sendMailRequest } = require("./controllers/Email");
const app = express();
const PORT = process.env.PORT || 5000;
const data = require("./details.json");

// data.forEach((person) => {
//   console.log(Name: ${person.name});
//   console.log(Company: ${person.company_name});
//   console.log(Role: ${person.role});
//   console.log(Email: ${person.mail_id});
// });
const fs = require("fs");
const path = "D:/Abhijeet_Resume.pdf";

if (!fs.existsSync(path)) {
  console.error("Resume file does not exist at the specified path:", path);
} else {
  console.log("Resume file exists:", path);
}
data.forEach((person) => {
  if (!person.mail_sent) {
    
    // const mailText = ` <p>Hello ${person.name.split(" ")[0]},</p>
    // <p>
    //   I hope this message finds you well. I'm Abhijeet Kadam, and I am currently in my final year of a B.Tech degree at Vishwakarma Institute of Information Technology, Pune. 
    //   I’m reaching out because I want to work as an SDE Intern at ${person.company_name}.
    // </p>
    // <p>I totally understand you are busy, so let me tell you briefly about myself:</p>
    // <ol>
    //     <li>I have solved over 300+ problems across different platforms (e.g., LeetCode, GFG).</li>
    //     <li>I’m proficient with React, TypeScript, JavaScript, Node.js, HTML5, Tailwind CSS, and Java. I’m also proficient with DSA.</li>
    // </ol>
    // <p>I believe I have the required skills and would mesh well with the culture at ${person.company_name}.</p>
    // <p>Would you be open to reviewing my profile for the SDE Intern role?</p>
    // <p>I’d also be happy to provide additional information if required. I’d appreciate the chance to discuss how my background could be a good fit.</p>
    // <p>Yours sincerely,</p>
    // <p>Abhijeet</p>
    // <p>Email: <a href="mailto:kadamabhijeet021@gmail.com">kadamabhijeet021@gmail.com</a></p>
    // <p>Contact No: 8080053515</p>
    // <p>
    //   <a href="https://www.linkedin.com/in/abhijeet-kadam-a4202622b/" target="_blank">LinkedIn</a> | 
    //   <a href="https://github.com/abhijeet8080" target="_blank">GitHub</a>
    // </p>`
    const mailText = ` <p>Dear Sushil Sir,</p>

    <p>I hope you are doing well.</p>

    <p>
      As per your message on LinkedIn, I am sharing my CV for your consideration. I am <strong>Abhijeet Kadam</strong>, currently in my final year of B.Tech, with a strong passion for building impactful tech products in the fields of full-stack development and AI.
    </p>

    <p>
      I’ve been following <strong>ExtraaEdge’s</strong> journey and am truly inspired by how your team is transforming admissions through technology. I would be thrilled to contribute to your mission.
    </p>

    <p>
      Please find my CV attached. I would be grateful for the opportunity to further discuss how I can add value to your team.
    </p>

    <p>Looking forward to hearing from you!</p>

    <p>Warm regards,<br />
      <strong>Abhijeet Kadam</strong><br />
      <p>Email: <a href="mailto:kadamabhijeet021@gmail.com">kadamabhijeet021@gmail.com</a></p>
     <p>Contact No: +918080053515</p>
     <p>
       <a href="https://www.linkedin.com/in/abhijeet-kadam-a4202622b/" target="_blank">LinkedIn</a> | 
       <a href="https://github.com/abhijeet8080" target="_blank">GitHub</a> |
       <a href="https://abhijeet-kadam.vercel.app/" target="_blank">Portfolio</a> |
     </p>
    </p>`
    console.log(person.name.split(" ")[0]);
    const options = {
      from: process.env.SMTP_MAIL,
      to: person.mail_id, // Ensure the recipient's email is correctly set
      subject: `Application for Job Opportunity at ExtraaEdge`,
      html: mailText, // Use HTML content for the email
      attachments: [
        {
          filename: "Abhijeet_Kadam_Resume.pdf", // Provide the correct filename with extension
          path: "D:/Resume/Abhijeet_Kadam Resume.pdf", // Absolute path to the resume file
          contentType: "application/pdf", // Specify the MIME type
        },
      ],
    };

    sendMailRequest(options);
    person.mail_sent = true;
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = { app, start };
