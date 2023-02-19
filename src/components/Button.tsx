import { Link } from "react-router-dom";
import "./Button.css";

interface props {
  children: any;
  dest: string;
  img?: string;
  alt?: string;
  newTab?: boolean;
}

function Button({ children, dest, img, alt, newTab }: props) {
  const img_exists = img !== undefined && alt !== undefined;
  return (
    <Link className="button" to={dest} target={newTab ? "_blank" : ""}>
      {img_exists ? (
        <div className="button__icon-container">
          <img src={img} alt={alt} className="button__icon" />
        </div>
      ) : (
        ""
      )}
      <h3 className={`${img_exists ? "button__text--image" : ""} button__text`}>
        {children}
      </h3>
      <h3 className="button__submit">&gt;</h3>
    </Link>
  );
}

export default Button;
