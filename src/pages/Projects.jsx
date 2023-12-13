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
            <img className="proimg" src={project.image} alt={`Project ${index + 1}`} />
            <h2 className="name">{project.name}</h2>
            <button className="live" onClick={() => window.open(project.live, "_blank")}>
              <span className="button-text">Live</span>
            </button>
            <button className="git" onClick={() => window.open(project.git, "_blank")}>
              <span className="button-text">GitHub</span>
            </button>
            <p>{project.detail}</p>
          </div>
        ))}
      </div>
    );
  };
  
  // Render the component
  return projects ? loaded() : <h1>Loading...</h1>;
}
export default Projects
