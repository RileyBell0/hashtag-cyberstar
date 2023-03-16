import "./Project.css";
import Card from "../../components/Card";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import Window from "../../components/Window";
import ProjectTab from "../../components/ProjectTab";
import ProjectLegend from "../../components/ProjectLegend";
import Divider from "../../components/Divider";
import Tech from "../../components/Tech";
import node_icon from "../../images/nodejs_icon.png";
import react_icon from "../../images/react_icon.png";
import ts_icon from "../../images/typescript_icon.png";
import wumpus_icon from "../../images/wumpus_icon.png";
import Button from "../../components/Button";
import ImageSelector from "../../components/ImageSelector";
import tupgorg_icon from "../../images/tupgorg_icon.png";
import tupgorg_home from "../../images/tupgorg_home.png";
import tupgorg_instructions from "../../images/tupgorg_instructions.png";
import tupgorg_early_game from "../../images/tupgorg_early_game.png";
import tupgorg_late_game from "../../images/tupgorg_late_game.png";
import riley from "../../images/Selfie.png";
import unknown from "../../images/unknown.png";
import TeamCard from "../../components/TeamCard";

const example_images = [
  [
    "Home",
    tupgorg_home,
    "Home Screen",
    "The opening screen seen when the game is launched",
  ],
  [
    "Instructions",
    tupgorg_instructions,
    "Instructions Screen",
    "A quick overview of how the game works, and what to expect when playing",
  ],
  [
    "Early Game",
    tupgorg_early_game,
    "Early Game Example",
    "An example of a procedurally generated early game level",
  ],
  [
    "Late Game",
    tupgorg_late_game,
    "Late Game Example",
    "An example of a procedurally generated late game level",
  ],
];

function Tupgorg() {
  return (
    <Page background="project">
      <PageContent>
        <Card className="project__title">
          <div className="project__title-area">
            <div className="project__title-area__desc">
              <h1 className="project__title-area__title no-margin">tupgorg</h1>
              <h3 className="project__title-area__subtitle no-margin">
                made with unity
              </h3>
            </div>
            <img
              className="project__title-area__icon"
              src={tupgorg_icon}
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
                src={tupgorg_icon}
                alt="GitHub Link"
                name="tupgorg"
                date="2019"
                dest=""
                inactive
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
              Tupgorg is a Unity game I created within my first semester
              studying software development. It's a project I was incredibly
              proud of at the time, and one I enjoy to look back on to see how I
              have improved as a developer over the years. It's rudimentary
              gameplay and "borrowed" assets was exciting to put together, and
              one of my favourite experiences in software development.
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

        <Window title="the_team" className="project__team">
          <TeamCard
            img={riley}
            name="Riley Bell"
            roles={["Project Lead", "Developer"]}
          />
          <TeamCard
            img={unknown}
            name="James"
            roles={["Designer", "Developer"]}
          />
          <TeamCard img={unknown} name="Tristan" roles={["Developer"]} />
        </Window>

        <div className="project__links">
          <div className="project__links__link-bg">
            <Button dest="/projects/wumpus" img={wumpus_icon} alt={"Wumpus"}>
              next
            </Button>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

export default Tupgorg;
