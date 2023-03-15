import "./styles/Home.css";

import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Card from "../components/Card";
import Banner from "../components/BannerImage";
import ascii_map_bg from "../images/ascii-map.png";
import Divider from "../components/Divider";
import BigTech from "../components/BigTech";
import Stamp from "../components/Stamp";
import selfie from "../images/Selfie.png";
import ts_icon from "../images/typescript_icon.png";
import js_icon from "../images/javascript_icon.png";
import react_icon from "../images/react_icon.png";
import css_icon from "../images/css_icon.png";
import cpp_icon from "../images/cpp_icon.png";
import cs_icon from "../images/cs_icon.png";
import bucket_list_welcome from "../images/bucket_list_welcome_home_page.png";
import bucket_list_login from "../images/bucket_list_login_page.png";
import bucket_list_destinations from "../images/bucket_list_destinations_page.png";
import bucket_list_map from "../images/bucket_list_map_page.png";
import bucket_list_settings from "../images/bucket_list_settings_page.png";
import bucket_list_trip from "../images/bucket_list_trip_page.png";
import python_icon from "../images/python_icon.png";
import html_icon from "../images/html_icon.png";
import mongodb_icon from "../images/mongodb_icon.png";
import nodejs_icon from "../images/nodejs_icon.png";
import Tech from "../components/Tech";
import Window from "../components/Window";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import arrow_next from "../images/arrow_next.png";
import arrow_prev from "../images/arrow_prev.png";

function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle);
    }, 530);
  }, [toggle]);
  return (
    <>
      <Banner
        src={ascii_map_bg}
        alt="An ASCII styled image of a map"
        imgClass="home__header__img"
        className="home__header"
      >
        {/* Header Text */}
        <div>
          <h1 className="home__header__title">riley_bell</h1>
          <p className="home__header__subtitle">Fullstack Developer</p>
        </div>

        {/* Header Techs */}
        <div className="home__header__tech-list">
          <Tech src={ts_icon} name="Typescript" />
          <Tech src={react_icon} name="React" />
          <Tech src={css_icon} name="CSS" />
        </div>
      </Banner>
      <Divider />
    </>
  );
}

function AboutPostcard() {
  return (
    <>
      <Card>
        {/* About me */}
        <div className="home__about">
          {/* Personal Info */}
          <div className="home__about__right">
            <div className="home__about__stamp">
              <Stamp src={selfie} alt="Image of Riley Bell" />
            </div>
            <p className="home__about__info-field">Riley Bell</p>
            <p className="home__about__info-field">Melbourne</p>
            <p className="home__about__info-field">Victoria</p>
            <p className="home__about__info-field">Australia</p>
          </div>

          {/* About Me Text */}
          <div className="home__about__left">
            <h3 className="home__about__title">about_me</h3>
            <p>
              I’m a Fullstack developer with solid experience developing web
              applications using the MERN stack. I have experience with
            </p>
            <ul className="home__bullet-list">
              <li>
                <p>Leading an Agile Scrum/Kanban Team</p>
              </li>
              <li>
                <p>Modern web frameworks</p>
              </li>
              <li>
                <p>NoSQL and SQL databases</p>
              </li>
              <li>
                <p>A wide variety of programming languages</p>
              </li>
            </ul>
            <p>
              For a more in-depth overview, feel free to visit the “About”
              section, or check out my attached resume.
            </p>
          </div>
        </div>
        {/* About Me Tech Summary */}
        <div className="home__about__techs">
          <Tech src={cpp_icon} name="C++" />
          <Tech src={cs_icon} name="C#" />
          <Tech src={ts_icon} name="Typescript" />
          <Tech src={python_icon} name="Python" />
          <Tech src={css_icon} name="CSS" />
          <Tech src={html_icon} name="HTML" />
        </div>
      </Card>
    </>
  );
}

function FeaturedProject() {
  return (
    <Window title="featured" info={["1 item", "2022", "university"]}>
      <div className="home__featured__container">
        <div className="home__featured__info">
          <h3 className="home__featured__info__title">bucket_list</h3>
          <p>
            Bucket List is a React web app built with the MERN stack for keeping
            track of planned trips and destinations.
          </p>
          <ul className="home__bullet-list">
            <li>
              <p>University Capstone Project</p>
            </li>
            <li>
              <p>Uses Google Maps and Imgur APIs</p>
            </li>
            <li>
              <p>Fully responsive desktop / mobile design</p>
            </li>
          </ul>
        </div>

        <div className="home__featured__carousel__container">
          <Carousel
            showStatus={false}
            showThumbs={false}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${hasNext ? "" : "hidden"} carousel__next`}
                  onClick={clickHandler}
                >
                  <img src={arrow_next} alt="Next Button" />
                </div>
              );
            }}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${hasPrev ? "" : "hidden"} carousel__prev`}
                  onClick={clickHandler}
                >
                  <img src={arrow_prev} alt="Previous Button" />
                </div>
              );
            }}
          >
            <div>
              <img
                src={bucket_list_welcome}
                alt="Welcome / Home page in Bucket List"
              />
            </div>
            <div>
              <img src={bucket_list_login} alt="Log-in page for Bucket List" />
            </div>
            <div>
              <img
                src={bucket_list_destinations}
                alt="Logged-in Home Page in Bucket List, displaying all Destinations"
              />
            </div>
            <div>
              <img
                src={bucket_list_trip}
                alt="Trip Information in Bucket List"
              />
            </div>
            <div>
              <img
                src={bucket_list_map}
                alt="Map page in Bucket List, displaying destinations on a map"
              />
            </div>
            <div>
              <img
                src={bucket_list_settings}
                alt="Settings page in Bucket List"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="home__featured__techs">
        <Tech src={mongodb_icon} name="MongoDB" />
        <Tech src={nodejs_icon} name="NodeJS" />
        <Tech src={react_icon} name="React" />
        <Tech src={js_icon} name="Javascript" />
        <Tech src={css_icon} name="CSS" />
        <Tech src={html_icon} name="HTML" />
      </div>
    </Window>
  );
}

function Home() {
  return (
    <Page background="home__bg">
      <Header />

      <PageContent>
        <AboutPostcard />
        <FeaturedProject />
      </PageContent>
    </Page>
  );
}

export default Home;
