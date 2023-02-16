import "./Tech.css";

interface props {
  src: string;
  name: string;
}
function Tech({ src, name }: props) {
  return (
    <div className="tech">
      <img src={src} alt={name + " - icon"} className="tech__img" />
      <p className="tech__title">{name}</p>
    </div>
  );
}

export default Tech;
