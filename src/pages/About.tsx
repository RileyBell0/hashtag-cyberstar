import "./styles/About.css";
import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Tech from "../components/Tech";
import frontend_icon from "../images/frontend_icon.png";
import selfie from "../images/Selfie.png";
import ts_icon from "../images/typescript_icon.png";
import backend_icon from "../images/backend_icon.png";
import Button from "../components/Button";
import document_icon from "../images/document_icon.png";
import email_icon from "../images/email_icon.png";
import resume from "../assets/riley-bell-resume.pdf";

function About() {
  const secondText =
    "And Javascript. Growing up I always loved creativity through music, and problem solving in the form of mathematics. In my time at University, I found that programming was the perfect way for me to effectively combine both of these.";
  const finalText =
    "Passions, especially within the realm of Web development. Recently I was introduced to Typescript and I fell in love, instantly introducing it into my current personal web. Development project in the place of Javascript, and am currently in the process of learning Angular alongside this, as though I’ve found React to be an incredibly.";

  return (
    <Page background="about__bg">
      <PageContent>
        <Card className="about">
          <div className="about__title">
            <h1 className="about__no-margin">about</h1>
            <h4 className="about__no-margin about__page-number">page 1 of 1</h4>
          </div>
          <div className="about__row about__name">
            <div className="about__half-page">
              <p className="about__top-description__first">
                I’m a Full stack web developer, with a main focus surrounding
                React as a part of the MERN stack. I’m currently employed
                full-time as a frontend developer utilising mainly PHP.
              </p>
              <div className="about__techs">
                <Tech src={frontend_icon} name="Frontend" />
                <Tech src={backend_icon} name="Backend" />
                <Tech src={ts_icon} name="Typescript" />
              </div>
              <p className="about__top-description__second">{secondText}</p>
            </div>
            <div className="about__selfie-container about__half-page">
              <img className="about__selfie" src={selfie} alt="Riley Bell" />
            </div>
          </div>
          <div className="about__row about__summary">
            <p className="about__no-margin about__half-page about__final-desc">
              {finalText}
            </p>
            <p className="about__final-desc-mobile">
              {secondText} {finalText}
            </p>
          </div>
          <div className="about__links">
            <Button dest={resume} img={document_icon} alt="Resume" newTab>
              resume
            </Button>
            <Button dest="/contact" img={email_icon} alt="Contact">
              contact
            </Button>
          </div>
        </Card>
      </PageContent>
    </Page>
  );
}

export default About;
