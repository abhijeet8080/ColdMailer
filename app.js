const express = require("express");
const { sendMailRequest } = require("./controllers/Email");
const app = express();
const {run} = require('./controllers/TextGenerator')
const PORT = process.env.PORT || 5000;

const options = {
  from: process.env.SMTP_MAIL,
  mail: "kadamabhi1881@gmail.com",
  subject: `To get an internship opportunity in `,
  text: `Test mail`,
};
// sendMailRequest(options)

const company = {
  company_name: "ABC",
  job_title: "Devops",
  job_description:
    "Source, screen, and shortlist candidates for various technical roles Coordinate and conduct initial interviews to assess candidate qualifications Assist in managing the recruitment process from sourcing to offer stage Collaborate with hiring managers to understand job requirements and candidate profile Maintain and update candidate databases and recruitment records",

};

run(company)

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
