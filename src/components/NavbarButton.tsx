import "./NavbarButton.css";
import { useNavigate } from "react-router-dom";

interface props {
  title: string;
  dest: string;
}

function NavbarButton({ title, dest }: props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="navbar-button" onClick={() => navigate(dest)}>
        <h5 className="navbar-button__arrow">&gt;</h5>
        <h5 className="navbar-button__text">{title}</h5>
      </button>
    </div>
  );
}

export default NavbarButton;
