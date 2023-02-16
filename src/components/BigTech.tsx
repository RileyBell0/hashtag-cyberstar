import "./BigTech.css";

interface props {
  src: string;
  name: string;
}
function BigTech({ src, name }: props) {
  return (
    <div className="big-tech">
      <img src={src} alt={name + " - icon"} className="big-tech__img" />
      <p className="big-tech__title">{name}</p>
    </div>
  );
}

export default BigTech;
