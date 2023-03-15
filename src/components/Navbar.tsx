import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/LOGO_light.png";
import hamburger from "../images/hamburger.png";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [hideNav, setHideNav] = useState(true);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      console.log("Click");
      console.log(e);
      // if (e[0] !== hamburgerRef.current) {
      // hide();
      // }
    };

    console.log("effect");

    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const hamburgerClick = () => {
    setHideNav(!hideNav);
  };

  const hide = () => {
    setHideNav(true);
  };

  return (
    <>
      <div className="navbar">
        <Link className="navbar__logo-container" to="/">
          <img className="navbar__logo" src={logo} alt="Site Logo" />
        </Link>
        <button
          ref={hamburgerRef}
          className="navbar__hamburger"
          onClick={hamburgerClick}
        >
          <img
            src={hamburger}
            alt="Hamburger Menu"
            className="navbar__hamburger-icon"
          />
        </button>

        <nav
          className={"navbar__buttons " + (hideNav ? "navbar__collapsed" : "")}
        >
          <NavbarButton onClick={hide} title="home" dest="/" />
          <NavbarButton onClick={hide} title="projects" dest="/projects" />
          <NavbarButton onClick={hide} title="github" dest="/github" />
          <NavbarButton onClick={hide} title="about" dest="/about" />
          <NavbarButton onClick={hide} title="contact" dest="/contact" />
        </nav>
      </div>
    </>
  );
}

interface navbar_button_props {
  title: string;
  dest: string;
  onClick?: () => any;
}

function NavbarButton({ title, dest, onClick }: navbar_button_props) {
  return (
    <div>
      <Link onClick={onClick} to={dest} className="navbar__button">
        <h6 className="navbar__button__arrow">&gt;</h6>
        <h6 className="navbar__button__text">{title}</h6>
      </Link>
    </div>
  );
}

export default Navbar;
