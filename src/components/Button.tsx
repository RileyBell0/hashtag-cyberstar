import { Link } from "react-router-dom";
import "./Button.css";

interface props {
  children: any;
  dest: string;
  img?: string;
  alt?: string;
}

function Button({ children, dest }: props) {
  return (
    <Link className="button" to={dest}>
      <h3 className="button__text">{children}</h3>
      <h3 className="button__submit">&gt;</h3>
    </Link>
  );
}

export default Button;
