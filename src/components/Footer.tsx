import "./Footer.css";
import logo from "../images/LOGO_light.png";
import github from "../images/github_light_icon.png";
import linkedin from "../images/linkedin_light_icon.png";
import email from "../images/email_light_icon.png";
import Button from "./Button";
import { open } from "../util/Navigation";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__my-info">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Site Logo"
                className="footer__content__my-info__logo"
              />
            </Link>
            <p className="footer__content__my-info__text">Riley Bell</p>
            <p className="footer__content__my-info__text">
              Fullstack Web Developer
            </p>
          </div>
          <div className="footer__content__my-info__socials">
            <Link to="https://github.com/RileyBell0" target="_blank">
              <img
                src={github}
                alt="Link to My GitHub"
                className="footer__content__my-info__socials__icon"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/riley-bell-20b25125a/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="Link to My Linked-In"
                className="footer__content__my-info__socials__icon"
              />
            </Link>
            <button className="footer__content__my-info__socials__button">
              <img
                src={email}
                alt="Link to write me an email"
                className="footer__content__my-info__socials__icon"
              />
            </button>
          </div>
        </div>

        <div className="footer__content__links-area">
          <div className="footer__content__links">
            <h4 className="footer__content__links__title">useful_links</h4>
            <Link to="/" className="footer__content__links__link">
              <p className="footer__content__links__link__text">Home</p>
            </Link>
            <Link to="/github" className="footer__content__links__link">
              <p className="footer__content__links__link__text">Github</p>
            </Link>
            <Link to="/about" className="footer__content__links__link">
              <p className="footer__content__links__link__text">About</p>
            </Link>
            <Link to="/contact" className="footer__content__links__link">
              <p className="footer__content__links__link__text">Contact</p>
            </Link>
          </div>
          <div className="footer__content__links">
            <h4 className="footer__content__links__title">projects</h4>
            <Link
              to="/projects/bucket"
              className="footer__content__links__link"
            >
              <p className="footer__content__links__link__text">Bucket List</p>
            </Link>
            <Link
              to="/projects/this-site"
              className="footer__content__links__link"
            >
              <p className="footer__content__links__link__text">This Site</p>
            </Link>
            <Link
              to="/projects/wumpus"
              className="footer__content__links__link"
            >
              <p className="footer__content__links__link__text">Wumpus</p>
            </Link>
            <Link
              to="/projects/tupgorg"
              className="footer__content__links__link"
            >
              <p className="footer__content__links__link__text">Tupgorg</p>
            </Link>
          </div>
        </div>

        <div className="footer__content__contact">
          <Button dest="/contact">contact</Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
