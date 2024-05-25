import React from 'react';
import './Skills.css';

function SkillsPage() {
  return (
    <div className="main-content">
      <div className="section">
        <h1>Technical Skills</h1>
        <p>I am proficient in a variety of technologies essential for data science and analytics:</p>
        <ul>
          <li>Data Visualization: Tableau</li>
          <li>Programming: Python, R, SQL, JavaScript, React, Flask, SQLite, C, C++, Java</li>
          <li>Scripting and Shells: Bash, PowerShell</li>
          <li>Operating Systems: Linux</li>
        </ul>
      </div>
      <div className="section">
        <h1>Data Science and Analytical Skills</h1>
        <p>
          I possess a robust understanding of data science principles and methodologies, including data cleaning, data analytics, and predictive modeling using machine learning algorithms. I excel in creating impactful visualizations with tools like Tableau and programming languages like Python and R.
        </p>
        <p>
          Additionally, I have a thorough understanding of business concepts, enabling me to think strategically and apply data science techniques to solve real-world business problems efficiently.
        </p>
      </div>
      <div className="section">
        <h1>Holistic Technology Understanding</h1>
        <p>
          My expertise spans from full-stack development to AI, making me well-suited for roles that require a deep integration of technology and business acumen. I am passionate about using my skills to solve complex problems and build scalable solutions that meet business needs.
        </p>
        <p>
          I have a key interest in automation and leveraging the tools of today to improve the workplace of tomorrow. My commitment to continuous learning and innovation drives me to develop solutions that enhance efficiency and productivity.
        </p>
      </div>
    </div>
  );
}

export default SkillsPage;
