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
      <div className="navbar-button__image" />
      <button className="navbar-button" onClick={() => navigate(dest)}>
        {title}
      </button>
      <div className="navbar-button__arrow" />
    </div>
  );
}

export default NavbarButton;
