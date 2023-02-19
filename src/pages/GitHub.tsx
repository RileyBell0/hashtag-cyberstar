import "./Github.css";

import Button from "../components/Button";
import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Window from "../components/Window";
import ProjectTab from "../components/ProjectTab";
import github_icon from "../images/github_light_icon.png";
import bucket_icon from "../images/bucket_icon_light.png";
import c_icon from "../images/c_icon.png";
import site_icon from "../images/LOGO_light.png";
import wumpus_icon from "../images/wumpus_icon.png";

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
    <Page background="github_bg">
      <PageContent>
        <GitHubLink />

        <Window
          title="featured"
          info={["4 Items", "4 Languages", "1 Active"]}
          className="github__featured"
        >
          <GitHubLegend />
          <div className="github__featured__projects">
            <ProjectTab
              dest="https://github.com/RileyBell0/hashtag-cyberstar"
              target="_blank"
              src={site_icon}
              alt="This Website"
              name="this-site"
              date="2023"
            />
            <ProjectTab
              dest="https://github.com/RileyBell0/BucketList-Frontend"
              target="_blank"
              src={bucket_icon}
              alt="Bucket List"
              name="bucket_list"
              date="2022"
            />
            <ProjectTab
              dest="https://github.com/RileyBell0/clib"
              target="_blank"
              src={c_icon}
              alt="C Library"
              name="c_lib"
              date="2020"
            />
            <ProjectTab
              dest="https://github.com/RileyBell0/Wumpus"
              target="_blank"
              src={wumpus_icon}
              alt="Wumpus"
              name="wumpus"
              date="2019"
            />
          </div>
          <div className="github__featured__results">
            <h5 className="github__featured__results__text">4 results found</h5>
          </div>
        </Window>

        <Window
          title="active"
          info={["2 Items", "2 Languages", "2 Active"]}
          className="github__featured"
        >
          <GitHubLegend />
          <div className="github__featured__projects">
            <ProjectTab
              dest="https://github.com/RileyBell0/hashtag-cyberstar"
              target="_blank"
              src={site_icon}
              alt="This Website"
              name="this-site"
              date="2023"
            />
            <ProjectTab
              dest="https://github.com/RileyBell0/BucketList-Frontend"
              target="_blank"
              src={wumpus_icon}
              alt="Wumpus"
              name="wumpus"
              date="2019"
            />
          </div>
          <div className="github__featured__results">
            <h5 className="github__featured__results__text">2 results found</h5>
          </div>
        </Window>
      </PageContent>
    </Page>
  );
}

export default GitHub;
