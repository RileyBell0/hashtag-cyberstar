import "./Project.css";
import Card from "../../components/Card";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import bucket_icon from "../../images/bucket_icon_light.png";
import Window from "../../components/Window";
import ProjectTab from "../../components/ProjectTab";
import ProjectLegend from "../../components/ProjectLegend";
import Divider from "../../components/Divider";
import Tech from "../../components/Tech";
import node_icon from "../../images/nodejs_icon.png";
import react_icon from "../../images/react_icon.png";
import ts_icon from "../../images/typescript_icon.png";
import github_icon from "../../images/github_light_icon.png";
import Button from "../../components/Button";
import ImageSelector from "../../components/ImageSelector";
import site_icon from "../../images/LOGO_light.png";
import stylescapes from "../../images/stylescapes.png";
import brand_board from "../../images/brand_board.png";
import wireframe from "../../images/wireframe.png";

const example_images = [
  [
    "Stylescapes",
    stylescapes,
    "Stylescapes",
    "Two stylescapes used in developing this site. Ultimately the second was chosen",
  ],
  [
    "Brand Board",
    brand_board,
    "Brand Board",
    "The Brand Board utilised througout the creation of this site for consistency and style",
  ],
  [
    "Wireframe",
    wireframe,
    "Site Wireframe",
    "The wireframe mockup of the site's design",
  ],
];

function ThisSite() {
  return (
    <Page background="project">
      <PageContent>
        <Card className="project__title">
          <div className="project__title-area">
            <div className="project__title-area__desc">
              <h1 className="project__title-area__title no-margin">
                this site
              </h1>
              <h3 className="project__title-area__subtitle no-margin">
                riley-bell.com
              </h3>
            </div>
            <img
              className="project__title-area__icon"
              src={site_icon}
              alt="This Site"
            />
          </div>
        </Card>

        <Window
          title="metadata"
          info={["1 item"]}
          className="project__metadata"
        >
          <div className="project__metadata__content">
            <ProjectLegend />
            <div className="project__metadata__content__tabs">
              <ProjectTab
                src={site_icon}
                alt="GitHub Link"
                name="this_site"
                date="2023"
                dest="https://github.com/RileyBell0/hashtag-cyberstar"
                target="_blank"
              />
            </div>
          </div>
          <h6 className="project__metadata__results-text no-margin">
            1 result found
          </h6>
        </Window>
        <Card className="project__details">
          <h3 className="no-margin">details</h3>
          <div className="project__details__desc">
            <h4>description</h4>{" "}
            <p className="project__details__desc__text">
              This website was created using a combination of React and
              Typescript as part of my "Hashtag Cyberstar" university class.
              Although I had no previous experience with Typescript, I saw this
              as an opportunity to expand my skill set and learn something new.
              For the design, I drew inspiration from the early days of
              computing and the retro, clunky UIs that were prevalent at the
              time. Moving forward, I'm excited to continue updating and
              refining the site as a record of my progress and a showcase of my
              accomplishments over the years.
            </p>
          </div>
          <Divider className="project__details__divider" weight={2} />
          <h4>technologies</h4>
          <div className="project__details__techs">
            <Tech src={react_icon} name="React" />
            <Tech src={node_icon} name="NodeJS" />
            <Tech src={ts_icon} name="Typescript" />
          </div>
        </Card>

        <ImageSelector images={example_images} />

        <div className="project__links">
          <div className="project__links__link-bg">
            <Button
              dest="https://github.com/RileyBell0/hashtag-cyberstar"
              img={github_icon}
              alt={"This Site's GitHub Link"}
              newTab
            >
              github
            </Button>
          </div>
          <div className="project__links__link-bg">
            <Button
              dest="/projects/bucket-list"
              img={bucket_icon}
              alt={"Bucket List"}
            >
              next
            </Button>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

export default ThisSite;
