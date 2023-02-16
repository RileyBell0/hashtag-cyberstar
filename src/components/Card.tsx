import "./Card.css";

interface props {
  children: any;
  className: string;
}

function Card({ children, className }: props) {
  return (
    <div className={"card " + (className ? className : "")}>{children}</div>
  );
}

export default Card;
