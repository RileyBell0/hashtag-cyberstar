import "./Projects.css";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Window from "../components/Window";
import ProjectTab from "../components/ProjectTab";
import bucket_icon from "../images/bucket_icon_light.png";
import tupgorg_icon from "../images/tupgorg_icon.png";
import site_icon from "../images/LOGO_light.png";
import wumpus_icon from "../images/wumpus_icon.png";

function Projects() {
  return (
    <Page background="projects__bg">
      <PageContent>
        <Window title="projects" info={["items: 4", "2019-2023", "university"]}>
          <div className="projects">
            <ProjectTab
              dest="/projects/this-site"
              src={site_icon}
              alt="This Website"
              name="this-site"
              date="2023"
            />
            <ProjectTab
              dest="/projects/bucketlist"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/tupgorg"
              src={tupgorg_icon}
              alt="Tupgorg"
              name="tupgorg"
              date="2019"
            />
            <ProjectTab
              dest="/projects/wumpus"
              src={wumpus_icon}
              alt="Wumpus"
              name="wumpus"
              date="2019"
            />
            <h5 className="projects__results">4 results found</h5>
          </div>
        </Window>
      </PageContent>
    </Page>
  );
}

export default Projects;
