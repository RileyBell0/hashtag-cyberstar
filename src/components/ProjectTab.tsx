import { Link } from "react-router-dom";
import "./ProjectTab.css";

interface props {
  src: string;
  alt: string;
  name: string;
  date: string;
  dest: string;
  target?: string;
}

function ProjectTab({ src, alt, name, date, dest, target }: props) {
  const ProjectTabDivider = () => {
    return (
      <div className="project-tab__divider-container">
        <div className="project-tab__divider" />
      </div>
    );
  };
  return (
    <>
      <Link to={dest} className="project-tab" target={target ? target : ""}>
        <div className="project-tab__left">
          <div className="project-tab__left__icon-container">
            <img className="project-tab__left__icon" src={src} alt={alt} />
          </div>
          <ProjectTabDivider />
          <h3 className="project-tab__text">{name}</h3>
        </div>
        <div className="project-tab__right">
          <ProjectTabDivider />
          <h4 className="project-tab__text project-tab__right__date">{date}</h4>
          <ProjectTabDivider />
          <h4 className="project-tab__text project-tab__right__link">&gt;</h4>
        </div>
      </Link>
    </>
  );
}

export default ProjectTab;
