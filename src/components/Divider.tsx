import "./Divider.css";

interface props {
  vertical?: boolean;
}

function Divider({ vertical }: props) {
  return <div className="divider" />;
}

export default Divider;
