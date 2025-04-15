const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINIAPI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const run = async (company) => {
  try {
    
    const prompt = `
Dear Hiring Manager,

My name is Abhijeet Kadam, and I'm a final-year B.Tech student at Vishwakarma Institute of Information Technology, anticipating graduation in [Month, Year]. I'm writing to express my strong interest in the Full Stack Developer position at TechCorp, as advertised on [Platform where you saw the advertisement - e.g., LinkedIn, company website]. [Specific reason related to the company or role – be specific!  E.g., "TechCorp's innovative work in AI-powered [industry] particularly resonates with my passion for developing cutting-edge solutions," or "The opportunity to work on [specific project or technology mentioned in the job description] is especially appealing."]

My background in [mention specific field or expertise, e.g., web development, database management, a specific programming language] has equipped me with the skills necessary to excel in this role. Below are some highlights of my qualifications:

**Key Skills & Experience:**

* **[Skill 1, e.g., React.js]:** Developed a [project type] application using React.js, demonstrating proficiency in component-based architecture and state management (e.g., Redux, Context API). This directly aligns with the requirement for building user-friendly interfaces as outlined in the job description.
* **[Skill 2, e.g., Node.js]:** Built a RESTful API using Node.js and Express.js, showcasing experience in backend development, database integration (e.g., MongoDB, PostgreSQL), and API design principles. This experience is directly applicable to the backend development aspects of the role.
* **[Skill 3, e.g., SQL]:** Proficient in SQL, with experience optimizing database queries and managing relational databases. This skill is crucial for efficient data management and is essential for this role. [Optional: Quantify your achievements – e.g., "Improved query performance by 20% through database optimization."]

**Project Highlights:** 

* Briefly describe 1-2 impactful projects, highlighting your contributions and quantifiable results whenever possible (e.g., "Developed a [project name] application that increased user engagement by X%," or "Reduced server load by Y% through optimized database queries"). Tailor these to the job description.

I'm particularly drawn to TechCorp's [mention part of their culture, and provide specific evidence from their website or other sources – e.g., commitment to innovation, emphasis on teamwork, positive employee reviews]. I believe my collaborative work style and dedication to creating high-quality software would make me a valuable asset to your team.

Thank you for your time and consideration. My resume provides further details on my qualifications, and I welcome the opportunity to discuss how my skills and experience can benefit TechCorp.

Best regards,  
Abhijeet Kadam

**Instructions for LLM:**
- Ensure the letter is personalized and fully completed.
- Do **not** leave any square brackets in the letter; replace them with concrete details based on the provided information.
- Tailor the content to match a full-stack developer role, ensuring each section (skills, experience, projects, etc.) is relevant and specific to the job description.
- Avoid generalizations and keep the tone professional, confident, and courteous.
- Provide a complete, ready-to-send cover letter for a job application.`;


    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.log("Error: ", error);
  }
};
module.exports = { run };
