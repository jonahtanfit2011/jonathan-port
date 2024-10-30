import React from 'react';
import data from './data';

const Projects = () => {
  return (
    <section className="project" id="projects">
        <center>
            <h2>Projects</h2>
        </center>
      <div className="project-box">
        <ul>
            {data.project1.map(project1 =>(
            <li key={project1.name}>
                <h3>{project1.name}</h3>
                <p>{project1.description}</p>
                <a href={project1.link}>View Project</a>
            </li>
            ))}
        </ul>
        <ul>
            {data.project2.map(project2 => (
            <li key={project2.name}>
                <h3>{project2.name}</h3>
                <p>{project2.description}</p>
                <a href={project2.link}>View Project</a>
            </li>
            ))}
        </ul>
        <ul>
            {data.project3.map(project3 => (
            <li key={project3.name}>
                <h3>{project3.name}</h3>
                <p>{project3.description}</p>
                <a href={project3.link}>View Project</a>
            </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;