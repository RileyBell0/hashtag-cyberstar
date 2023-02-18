import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";
import logo from "../images/LOGO_light.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="navbar__logo-container" to="/">
          <img className="navbar__logo" src={logo} alt="Site Logo" />
        </Link>
        <div className="navbar__buttons">
          <NavbarButton title="home" dest="/" />
          <NavbarButton title="projects" dest="/projects" />
          <NavbarButton title="github" dest="/github" />
          <NavbarButton title="about" dest="/about" />
          <NavbarButton title="contact" dest="/contact" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
