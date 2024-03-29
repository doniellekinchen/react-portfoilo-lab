import { useState, useEffect } from "react";


function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      {/* <h2>{about.name}</h2> */}
      <img className="headshot" src={about.headshot}></img>
      <h2 align="center">
  <a href="https://skillicons.dev">
    <img className="skills" src="https://skillicons.dev/icons?i=html,css,tailwind,js,mongodb,express,nodejs,react,git,github,py,django,vue" />
  </a>
</h2>
      <a className="resume" href={`${about.github}`}>Github</a> |
      <a className="resume" href={`${about.linkedin}`}>LinkedIn</a> |
      <a className="resume" href={`${about.resume}`}>Resume</a> |
      <a className="email" href={`mailto:${about.email}`}>Email</a> |
      <a className="medium" href={`${about.blog}`}>Medium</a> 
   <p className="bio">{about.bio}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;