import "./Project.css";
import Card from "../../components/Card";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import Window from "../../components/Window";
import ProjectTab from "../../components/ProjectTab";
import ProjectLegend from "../../components/ProjectLegend";
import Divider from "../../components/Divider";
import Tech from "../../components/Tech";
import cs_icon from "../../images/cs_icon.png";
import ts_icon from "../../images/typescript_icon.png";
import github_icon from "../../images/github_light_icon.png";
import Button from "../../components/Button";
import ImageSelector from "../../components/ImageSelector";
import contact_icon from "../../images/email_icon.png";
import wumpus_icon from "../../images/wumpus_icon.png";
import wumpus_home from "../../images/wumpus_home.png";

const example_images = [
  [
    "Home",
    wumpus_home,
    "Home Screen",
    "The home screen, and general interface the user is greeted with",
  ],
];

function Wumpus() {
  return (
    <Page background="project">
      <PageContent>
        <Card className="project__title">
          <div className="project__title-area">
            <div className="project__title-area__desc">
              <h1 className="project__title-area__title no-margin">wumpus</h1>
              <h3 className="project__title-area__subtitle no-margin">
                command line game
              </h3>
            </div>
            <img
              className="project__title-area__icon"
              src={wumpus_icon}
              alt="Wumpus"
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
                src={wumpus_icon}
                alt="GitHub Link"
                name="wumpus"
                date="2019"
                dest="https://github.com/RileyBell0/Wumpus"
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
              Wumpus is my current passion project alongside developing,
              maintaing and updating this site. This exciting graphical terminal
              window game is built in Typescript and invites players to explore
              a procedurally generated dungeon, gather resources, purchase
              upgrades, and engage in battles against a range of enemies.
              "Wumpus World" is a pre-existing game with a similar general
              concept. I created a version of this during a class of mine at
              RMIT, and love the idea of recreating this experience with modern
              technologies and advanced design principles to create a game that
              boasts improved functionality and a more sophisticated terminal
              display.
            </p>
          </div>
          <Divider className="project__details__divider" weight={2} />
          <h4>technologies</h4>
          <div className="project__details__techs">
            <Tech src={cs_icon} name="C#" />
            <Tech src={ts_icon} name="Typescript" />
          </div>
        </Card>

        <ImageSelector images={example_images} />

        <div className="project__links">
          <div className="project__links__link-bg">
            <Button
              dest="https://github.com/RileyBell0/wumpus"
              img={github_icon}
              alt={"Wumpus GitHub Link"}
              newTab
            >
              github
            </Button>
          </div>
          <div className="project__links__link-bg">
            <Button dest="/contact" img={contact_icon} alt={"Contact"}>
              contact
            </Button>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

export default Wumpus;
