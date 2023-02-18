import "./Box.css";

interface props {
  children: any;
  className: string;
}

function Card({ children, className }: props) {
  return (
    <div className={"box " + (className ? className : "")}>{children}</div>
  );
}

export default Card;
