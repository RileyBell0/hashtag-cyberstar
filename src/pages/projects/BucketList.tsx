import "./BucketList.css";
import Card from "../../components/Card";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import bucket_icon from "../../images/bucket_icon_light.png";
import Window from "../../components/Window";
import ProjectTab from "../../components/ProjectTab";
import ProjectLegend from "../../components/ProjectLegend";
import frontend from "../../images/frontend_icon.png";
import backend from "../../images/backend_icon.png";
import Divider from "../../components/Divider";
import Tech from "../../components/Tech";
import mongo_icon from "../../images/mongodb_icon.png";
import node_icon from "../../images/nodejs_icon.png";
import react_icon from "../../images/react_icon.png";
import js_icon from "../../images/javascript_icon.png";
import bucket_example_welcome from "../../images/bucket_list_welcome_home_page.png";
import bucket_example_dest from "../../images/bucket_list_destinations_page.png";
import bucket_example_login from "../../images/bucket_list_login_page.png";
import bucket_example_map from "../../images/bucket_list_map_page.png";
import bucket_example_settings from "../../images/bucket_list_settings_page.png";
import bucket_example_trip from "../../images/bucket_list_trip_page.png";
import { useState } from "react";
import github_icon from "../../images/github_light_icon.png";
import TeamCard from "../../components/TeamCard";
import riley from "../../images/Selfie.png";
import daniel from "../../images/daniel.png";
import jude from "../../images/jude.jpg";
import ted from "../../images/ted.jpg";
import luke from "../../images/luke.jpg";
import Button from "../../components/Button";
import tupgorg_icon from "../../images/tupgorg_icon.png";

const example_images = [
  [
    "Welcome",
    bucket_example_welcome,
    "Welcome page",
    "What you see when you visit the site for the first time",
  ],
  ["Login", bucket_example_login, "Login page", "Log in to your account"],
  [
    "Destinations",
    bucket_example_dest,
    "Destination page",
    "View all destinations at a glance",
  ],
  [
    "Map view",
    bucket_example_map,
    "Map view page",
    "View destinations on a map",
  ],
  ["Settings", bucket_example_settings, "Settings page", "Edit user settings"],
  [
    "Trips",
    bucket_example_trip,
    "Trip page",
    "Categorise destinations into trips",
  ],
];

function BucketList() {
  return (
    <Page background="project">
      <PageContent>
        <Card className="project__title">
          <div className="project__title-area">
            <div className="project__title-area__desc">
              <h1 className="project__title-area__title no-margin">
                bucket list
              </h1>
              <h3 className="project__title-area__subtitle no-margin">
                destination_tracker
              </h3>
            </div>
            <img
              className="project__title-area__icon"
              src={bucket_icon}
              alt="Bucket List"
            />
          </div>
        </Card>

        <Window
          title="metadata"
          info={["4 items"]}
          className="project__metadata"
        >
          <div className="project__metadata__content">
            <ProjectLegend />
            <div className="project__metadata__content__tabs">
              <ProjectTab
                src={frontend}
                alt="Frontend Link"
                name="frontend"
                date="2022"
                dest="https://github.com/RileyBell0/BucketList-Frontend"
                target="_blank"
              />
              <ProjectTab
                src={backend}
                alt="Backend Link"
                name="backend"
                date="2022"
                dest="https://github.com/RileyBell0/BucketList-Backend"
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
              A much longer description spanning two paragraphs describing the
              purpose of the project, significant achievements, clarification on
              my role within its development. Also includes details such as what
              I learnt - such as team leadership. And mentions areas for
              improvement, and further directions / goals for the project. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in
              turpis tellus. Vivamus urna eros, pharetra vel tristique eget.
            </p>
          </div>
          <Divider className="project__details__divider" weight={2} />
          <h4>technologies</h4>
          <div className="project__details__techs">
            <Tech src={mongo_icon} name="MongoDB" />
            <Tech src={node_icon} name="NodeJS" />
            <Tech src={react_icon} name="React" />
            <Tech src={js_icon} name="Javascript" />
          </div>
        </Card>

        <ImageSelector images={example_images} />

        <Window title="the_team" className="project__team">
          <TeamCard
            img={riley}
            name="Riley Bell"
            roles={["Product Owner", "Frontend Lead", "Fullstack Developer"]}
          />
          <TeamCard
            img={ted}
            name="Ted Barrett"
            roles={["Scrum Master", "Fullstack Developer"]}
          />
          <TeamCard
            img={luke}
            name="Luke Russo"
            roles={["Backend Lead", "Fullstack Developer"]}
          />
          <TeamCard
            img={daniel}
            name="Daniel Chen"
            roles={["Imgur API Expert", "Fullstack Developer"]}
          />
          <TeamCard
            img={jude}
            name="Jude Offord"
            roles={["Google API Expert", "Fullstack Developer"]}
          />
        </Window>

        <div className="project__links">
          <div className="project__links__link-bg">
            <Button
              dest="https://github.com/RileyBell0/BucketList-Frontend"
              img={github_icon}
              alt={"Bucket List GitHub Link"}
              newTab
            >
              github
            </Button>
          </div>
          <div className="project__links__link-bg">
            <Button dest="/projects/tupgorg" img={tupgorg_icon} alt={"Tupgorg"}>
              next
            </Button>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}

function ImageSelector({ images }: { images: Array<Array<string>> }) {
  const NAME_INDEX = 0;
  const SRC_INDEX = 1;
  const ALT_INDEX = 2;
  const DESC_INDEX = 3;

  const [selected_img, setSelectedImg] = useState(images[0]);

  const ImageSelectorButton = ({
    selected_img,
  }: {
    selected_img: Array<string>;
  }) => {
    const [stored_img] = useState(selected_img);

    return (
      <button
        className="project__images__files__file-container"
        onClick={() => setSelectedImg(stored_img)}
      >
        <h5 className="project__images__files__file__name no-margin">
          {stored_img[NAME_INDEX]}
        </h5>
        <h5 className="project__images__files__file__selector no-margin">
          &gt;
        </h5>
      </button>
    );
  };

  return (
    <Window
      className="project__images-container"
      title="images"
      info={[images.length + " items"]}
    >
      <div className="project__images">
        <div className="project__images__files">
          <div className="project__images__files-container">
            {images.map((img_details: Array<string>) => {
              return <ImageSelectorButton selected_img={img_details} />;
            })}
          </div>
          <p className="project__images__results">
            {images.length} results found
          </p>
        </div>
        <div className="project__images__display-container">
          <img
            className="project__images__display"
            src={selected_img[SRC_INDEX]}
            alt={selected_img[ALT_INDEX]}
          />
          <p>{selected_img[DESC_INDEX]}</p>
        </div>
      </div>
    </Window>
  );
}
export default BucketList;
