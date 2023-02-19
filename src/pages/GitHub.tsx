import "./Github.css";

import Button from "../components/Button";
import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import github_icon from "../images/github_light_icon.png";
import Window from "../components/Window";
import ProjectTab from "../components/ProjectTab";
import bucket_icon from "../images/bucket_icon_light.png";

function GitHub() {
  const GitHubLink = () => {
    return (
      <Card className="github__link">
        <h1 className="github__link__title">github</h1>
        <Button
          dest="https://github.com/RileyBell0"
          img={github_icon}
          alt="GitHub"
        >
          rileybell0
        </Button>
      </Card>
    );
  };

  const GitHubLegend = () => {
    return (
      <div className="github__featured__legend">
        <div className="github__featured__legend__group">
          <h4 id="github__featured__legend__icon" className="github__no-margin">
            icon
          </h4>
          <h4 id="github__featured__legend__name" className="github__no-margin">
            name
          </h4>
        </div>
        <div className="github__featured__legend__group">
          <h4 id="github__featured__legend__date" className="github__no-margin">
            date
          </h4>
          <h4 id="github__featured__legend__link" className="github__no-margin">
            {">"}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <Page>
      <PageContent>
        <GitHubLink />

        <Window
          title="featured"
          info={["3 Items", "4 Languages", "1 Active"]}
          className="github__featured"
        >
          <GitHubLegend />
          <div className="github__featured__projects">
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="/projects/bucket"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
          </div>
          <div className="github__featured__results">
            <h5 className="github__featured__results__text">3 results found</h5>
          </div>
        </Window>
      </PageContent>
    </Page>
  );
}

export default GitHub;
