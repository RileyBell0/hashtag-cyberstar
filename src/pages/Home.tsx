import "./Home.css";

import Navbar from "../components/Navbar";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Card from "../components/Card";
import Banner from "../components/BannerImage";
import ascii_map_bg from "../images/ascii-map.png";
import Divider from "../components/Divider";
import BigTech from "../components/BigTech";
import ts_icon from "../images/typescript-icon.png";
import react_icon from "../images/react-icon.png";
import css_icon from "../images/css-icon.png";
import selfie from "../images/Selfie.png";
import Stamp from "../components/Stamp";

function Header() {
  return (
    <>
      <Banner
        src={ascii_map_bg}
        alt="An ASCII styled image of a map"
        imgClass="home__header__img"
        className="home__header"
      >
        <div>
          <h1 className="home__header__title">riley bell_</h1>
          <p className="home__header__subtitle">TODO: add NOT_FOUND page</p>
        </div>
        <div className="home__header__tech-list">
          <BigTech src={ts_icon} name="Typescript" />
          <h1 className="home__header__tech-list__separator">-</h1>
          <BigTech src={react_icon} name="React" />
          <h1 className="home__header__tech-list__separator">-</h1>
          <BigTech src={css_icon} name="CSS" />
        </div>
      </Banner>
      <Divider />
    </>
  );
}

function AboutPostcard() {
  return (
    <>
      <Card className="home__about">
        <div className="home__about__separator" />
        <div className="home__about-container">
          <div className="home__about__left">
            <h3 className="home__about__title">about_me</h3>
            <p>
              I’m a Fullstack developer with solid experience developing web
              applications using the MERN stack. I have experience with
            </p>
            <ul className="home__about__list">
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

          <div className="home__about__right">
            <div className="home__about__stamp">
              <Stamp src={selfie} alt="Image of Riley Bell" />
            </div>
            <p className="home__about__info-field">Riley Bell</p>
            <p className="home__about__info-field">Melbourne</p>
            <p className="home__about__info-field">Victoria</p>
            <p className="home__about__info-field">Australia</p>
          </div>
        </div>
      </Card>
    </>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Page>
        <div className="home__bg" />
        <Header />

        <PageContent>
          <AboutPostcard />
        </PageContent>
      </Page>
    </>
  );
}

export default Home;
