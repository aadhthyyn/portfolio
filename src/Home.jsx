import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home" id="home">
        <h1>
          Hi, I'm <span>Adithyan</span>
        </h1>

        <h2>MERN Full Stack Developer</h2>

        <p>
          Passionate about creating modern and responsive web applications using
          React, Node.js, Express and MongoDB.
        </p>

        <div className="buttons">
          <a href="projects" className="primary-btn">
            View My Work ↓
          </a>

          <a href="contact" className="secondary-btn">
            Get In Touch
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank">
            LinkedIn
          </a>

          <a href="">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
