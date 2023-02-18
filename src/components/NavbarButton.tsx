import "./NavbarButton.css";
import { Link } from "react-router-dom";

interface props {
  title: string;
  dest: string;
}

function NavbarButton({ title, dest }: props) {
  return (
    <div>
      <Link to={dest} className="navbar-button">
        <h5 className="navbar-button__arrow">&gt;</h5>
        <h5 className="navbar-button__text">{title}</h5>
      </Link>
    </div>
  );
}

export default NavbarButton;
