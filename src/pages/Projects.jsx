import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {

		//make api call and get response
    const response = await fetch("./projects.json");

		// turn response into javascript object
    const data = await response.json();

		// set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="project">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <img src={project.image} alt={`Project ${index + 1}`} />
            <h2 className="name">Name: {project.name}</h2>
            <p className="live">Live: <a href={project.live} target="_blank" rel="noopener noreferrer">{project.live}</a></p>
            <p className="git">GitHub: <a href={project.git} target="_blank" rel="noopener noreferrer">{project.git}</a></p>
          </div>
        ))}
      </div>
    );
  }
        

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
