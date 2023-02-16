import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
import logo from "../images/LOGO_light.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <button
          className="navbar__logo-container"
          onClick={() => navigate("/")}
        >
          <img className="navbar__logo" src={logo} alt="Site Logo" />
        </button>
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
