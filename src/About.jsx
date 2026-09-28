import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-text">
          <h2>I'm Adithyan</h2>

          <p>
            I am a MERN Full Stack Developer from Kerala. I have completed my
            Diploma in Computer Engineering and currently learning MERN Full
            Stack Development at Luminar Technolab.
          </p>

          <p>
            I enjoy creating responsive and user-friendly web applications. I am
            interested in learning new technologies and improving my development
            skills.
          </p>

          <div className="about-info">
            <p>
              <b>Education:</b> Diploma in Computer Engineering
            </p>
            <p>
              <b>Course:</b> MERN Full Stack Development
            </p>
            <p>
              <b>Location:</b> Kerala, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
