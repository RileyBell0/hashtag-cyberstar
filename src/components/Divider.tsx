import "./styles/Divider.css";

interface props {
  weight?: Number;
  className?: String;
}

function Divider({ weight, className }: props) {
  let style = {};
  if (weight !== undefined) {
    style = { "border-bottom": `${weight}px solid var(--color-neutral-grey)` };
  }
  return (
    <div className={"divider " + (className ? className : "")} style={style} />
  );
}

export default Divider;
