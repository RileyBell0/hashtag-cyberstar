import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
import logo from "../images/LOGO_light.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <img
          className="navbar__logo"
          src={logo}
          alt="Site Logo of a lowercase r followed by an underscore"
        />
        <div className="navbar__buttons">
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
