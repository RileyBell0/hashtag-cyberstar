import { Link } from "react-router-dom";
import "./styles/Button.css";

interface props {
  children: any;
  dest?: string;
  img?: string;
  alt?: string;
  newTab?: boolean;
}

function Button({ children, dest, img, alt, newTab }: props) {
  const img_exists = img !== undefined && alt !== undefined;
  const ButtonContents = () => {
    return (
      <>
        {img_exists ? (
          <div className="button__icon-container">
            <img src={img} alt={alt} className="button__icon" />
          </div>
        ) : (
          ""
        )}
        <h3
          className={`${img_exists ? "button__text--image" : ""} button__text`}
        >
          {children}
        </h3>
        <h3 className="button__submit">&gt;</h3>
      </>
    );
  };

  if (dest) {
    return (
      <Link className="button" to={dest} target={newTab ? "_blank" : ""}>
        <ButtonContents />
      </Link>
    );
  } else {
    return (
      <div className="button">
        <ButtonContents />
      </div>
    );
  }
}

export default Button;
