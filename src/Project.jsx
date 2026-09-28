import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>

      <div className="projects-content">
        <div className="project">
          <h2>PredictiX</h2>

          <p>
            A healthcare web application built using React, Node.js, Express and
            MongoDB.
          </p>

          <p>React | Node.js | Express | MongoDB</p>

          <a href="#">GitHub</a>
        </div>

        <div className="project">
          <h2>Job Portal</h2>

          <p>
            A simple job portal application that displays jobs using a REST API.
          </p>

          <p>HTML | CSS | JavaScript | REST API</p>

          <a href="#">GitHub</a>
        </div>

        <div className="project">
          <h2>Product App</h2>

          <p>
            A product application created using JavaScript and API integration.
          </p>

          <p>HTML | CSS | JavaScript | API</p>

          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
