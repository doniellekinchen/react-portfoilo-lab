import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    // borderBottom: ".2rem solid white",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
    marginBottom: "10px"
  };

  return (
    <header>
      <h3 className="doni">Donielle Kinchen</h3>
      <nav style={navStyle}>
        <Link to="/">
          <div className="home">HOME</div>
        </Link>
        <Link to="/about">
          <div className="about">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="projects">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;