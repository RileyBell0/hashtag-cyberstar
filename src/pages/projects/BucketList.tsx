import "./Project.css";
import Card from "../../components/Card";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import bucket_icon from "../../images/bucket_icon_light.png";
import Window from "../../components/Window";
import ProjectTab from "../../components/ProjectTab";
import ProjectLegend from "../../components/ProjectLegend";
import frontend from "../../images/html_icon.png";
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
import github_icon from "../../images/github_light_icon.png";
import TeamCard from "../../components/TeamCard";
import riley from "../../images/Selfie.png";
import daniel from "../../images/daniel.png";
import jude from "../../images/jude.jpg";
import ted from "../../images/ted.jpg";
import luke from "../../images/luke.jpg";
import Button from "../../components/Button";
import tupgorg_icon from "../../images/tupgorg_icon.png";
import ImageSelector from "../../components/ImageSelector";

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
          info={["2 items"]}
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
              Bucket List was a pivotal project in my journey as a software
              developer. Developing this as a part of my university capstone was
              my first experience working within an Agile software development
              team. My team of five each took on different roles and
              responsibilities, with my focus being on frontend development and
              ensuring the project stayed on track within my role as a Product
              Owner. Using a wide range of Technologies and APIs, we were able
              to deliver a fully functional and refined product for both desktop
              and mobile usage.
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

export default BucketList;
