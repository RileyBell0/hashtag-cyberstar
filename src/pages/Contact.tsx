import "./styles/Contact.css";

import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Button from "../components/Button";
import email from "../images/email_icon.png";
import linkedin from "../images/linkedin_light_icon.png";

function Contact() {
  return (
    <Page background="contact__bg">
      <PageContent>
        <Card className="contact">
          <h1 className="contact__title">contact</h1>
          <p className="contact__text">
            To get in contact with me, send me an Email, or message me on
            Linked-in
          </p>
          <div className="contact__buttons">
            <a
              href="mailto: rileybell484@gmail.com"
              className="contact__buttons__email"
            >
              <Button img={email} alt="Send me an Email">
                email
              </Button>
            </a>

            <Button
              newTab={true}
              img={linkedin}
              alt="Linked-in Logo"
              dest="https://www.linkedin.com/in/riley-bell-20b25125a/"
            >
              linkedin
            </Button>
          </div>
        </Card>
      </PageContent>
    </Page>
  );
}

export default Contact;
