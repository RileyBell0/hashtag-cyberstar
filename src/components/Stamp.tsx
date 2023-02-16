import "./Stamp.css";

interface props {
  src: string;
  alt: string;
}

function Stamp({ src, alt }: props) {
  return (
    <div className="stamp">
      <div className="stamp__backdrop"></div>
      <div className="stamp__img-container">
        <img className="stamp__img" src={src} alt={alt}></img>
      </div>
    </div>
  );
}

export default Stamp;
