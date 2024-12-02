const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINIAPI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const run = async (company) => {
  try {
    const prompt =
      `Generate a main body for mail asking for internship opportunity based on following parameters
      compnay name:${company.company_name}
      job title:${company.job_title}
      job description:${company.job_description}`;

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.log("Error: ", error);
  }
};
module.exports = { run };
