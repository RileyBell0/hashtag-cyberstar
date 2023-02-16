import "./Card.css";

interface props {
  children: any;
}

function Card({ children }: props) {
  return <div className="card">{children}</div>;
}

export default Card;
