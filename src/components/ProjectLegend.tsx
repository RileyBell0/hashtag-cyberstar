import "./styles/ProjectLegend.css";

function ProjectLegend() {
  return (
    <div className="project-legend">
      <div className="project-legend__group">
        <h4 className="project-legend__icon no-margin">icon</h4>
        <h4 className="project-legend__name no-margin">name</h4>
      </div>
      <div className="project-legend__group">
        <h4 className="project-legend__date no-margin">date</h4>
        <h4 className="project-legend__link no-margin">{">"}</h4>
      </div>
    </div>
  );
}

export default ProjectLegend;
