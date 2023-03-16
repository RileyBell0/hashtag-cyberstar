import "./styles/ProjectTab.css";
import { Link } from "react-router-dom";

interface props {
  src: string;
  alt: string;
  name: string;
  date: string;
  dest: string;
  target?: string;
  inactive?: boolean;
}

function ProjectTab({ src, alt, name, date, dest, target, inactive }: props) {
  const ProjectTabDivider = () => {
    return (
      <div
        className={
          "project-tab__divider-container project-tab__hidden-on-mobile"
        }
      >
        <div className="project-tab__divider" />
      </div>
    );
  };
  const Tab = () => {
    return (
      <>
        <div className="project-tab__left">
          <div className="project-tab__left__icon-container">
            <img className="project-tab__left__icon" src={src} alt={alt} />
          </div>
          <ProjectTabDivider />
          <h3 className="project-tab__text project-tab__name">{name}</h3>
        </div>
        <div className="project-tab__right">
          <ProjectTabDivider />
          <h4 className="project-tab__text project-tab__right__date">{date}</h4>
          <ProjectTabDivider />

          <h4
            className={
              "project-tab__text project-tab__right__link " +
              (inactive ? "project-tab__text--inactive" : "")
            }
          >
            {inactive ? "x" : ">"}
          </h4>
        </div>
      </>
    );
  };
  return inactive ? (
    <div className="project-tab--inactive">
      <Tab />
    </div>
  ) : (
    <Link to={dest} className="project-tab" target={target ? target : ""}>
      <Tab />
    </Link>
  );
}

export default ProjectTab;
