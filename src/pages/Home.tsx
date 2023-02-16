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

function Header() {
  return (
    <>
      <Banner
        src={ascii_map_bg}
        alt="An ASCII styled image of a map"
        imgClass="home__header__img"
        className="home__header"
      >
        <h1 className="home__header__title">riley bell_</h1>
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
      <Card>
        <div className="home__about-container">
          <div className="home__about__left">
            <h3>about_me</h3>
            <p>
              I’m a Fullstack developer with solid experience developing web
              applications using the MERN stack. I have experience with
            </p>
            <ul>
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
            <h3>test</h3>
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
        <Header />

        <PageContent>
          <AboutPostcard />
        </PageContent>
      </Page>
    </>
  );
}

export default Home;
