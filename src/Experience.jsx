import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>

      <div className="experience-content">
        <div className="experience-box">
          <h2>ICT Academy Internship</h2>
          <h3>ICT Domain</h3>
          <p>
            Completed an internship and gained practical knowledge and
            experience in the ICT field.
          </p>
        </div>

        <div className="experience-box">
          <h2>Srishti Innovative</h2>
          <h3>Python & Django</h3>
          <p>
            Completed an internship where I learned Python and Django and worked
            with web development concepts.
          </p>
        </div>

        <div className="experience-box">
          <h2>Luminar Technolab</h2>
          <h3>MERN Full Stack Development</h3>
          <p>
            Currently learning full stack development using MongoDB, Express,
            React and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
