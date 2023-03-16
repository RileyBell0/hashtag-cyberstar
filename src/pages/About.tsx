import "./styles/About.css";
import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Tech from "../components/Tech";
import frontend_icon from "../images/html_icon.png";
import selfie from "../images/Selfie.png";
import ts_icon from "../images/typescript_icon.png";
import backend_icon from "../images/backend_icon.png";
import Button from "../components/Button";
import document_icon from "../images/document_icon.png";
import email_icon from "../images/email_icon.png";
import resume from "../assets/riley-bell-resume.pdf";

function About() {
  const secondText =
    "I began my journey in the technology field while studying at RMIT, where I pursued a Bachelor of IT majoring in Games and Graphics programming. It was during this time that I first fell in love with the creative potential of coding, and I continue to appreciate the balance of creativity and logic that software development requires. I recently completed my Bachelor at the University of Melbourne, during which I've gained experience with a wide range of technologies and design methodologies.";
  const finalText =
    "As someone who enjoys the challenge of designing within constraints, I have a particular interest in developing more user-friendly and intuitive command-line interfaces. I am currently working on a typescript version of Wumpus World as a short rogue-like command line game which I hope to integrate into this site at a later date. Overall, I am a motivated and skilled Fullstack developer with a passion for using software to design creative and yet purposeful solutions to interesting problems. I love learning and am excited to bring my expertise to future projects.";

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
                As a Fullstack developer, I have experience working with both
                the MERN and LAMP tech stacks. While I am more familiar with the
                MERN stack, I've loved learning and utilising the LAMP stack as
                a part of my current job as a Junior Software Developer at Swoop
                Analytics.
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
