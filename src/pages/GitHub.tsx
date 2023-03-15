import "./styles/Github.css";

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
import ProjectLegend from "../components/ProjectLegend";

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

  return (
    <Page background="github_bg">
      <PageContent>
        <GitHubLink />

        <Window
          title="featured"
          info={["4 Items", "", "1 Active"]}
          className="github__featured"
        >
          <ProjectLegend />
          <div className="github__featured__projects">
            <ProjectTab
              dest="https://github.com/RileyBell0/hashtag-cyberstar"
              target="_blank"
              src={site_icon}
              alt="This Website"
              name="this_site"
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
            <h6 className="github__featured__results__text">4 results found</h6>
          </div>
        </Window>

        <Window
          title="active"
          info={["2 Items", "", "2 Active"]}
          className="github__featured"
        >
          <ProjectLegend />
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
              dest="https://github.com/RileyBell0/Wumpus"
              target="_blank"
              src={wumpus_icon}
              alt="Wumpus"
              name="wumpus"
              date="2019"
            />
          </div>
          <div className="github__featured__results">
            <h6 className="github__featured__results__text">2 results found</h6>
          </div>
        </Window>
      </PageContent>
    </Page>
  );
}

export default GitHub;
