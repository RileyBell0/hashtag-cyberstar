import "./styles/Credit.css";
import Card from "../components/Card";
import Page from "../components/Page";
import PageContent from "../components/PageContent";

function Credit() {
  return (
    <>
      <Page>
        <PageContent>
          <Card>
            <h1>Sources</h1>

            <a
              className="credit__link"
              href="https://github.com/doublespeakgames/adarkroom"
            >
              <h4>Home page header banner background</h4>
            </a>
            <p>
              Sourced from "A Dark Room", a free minimalist text adventure game,
              available freely on GitHub
            </p>
            <br />

            <a
              className="credit__link"
              href="https://wallpaperaccess.com/white-circuit-board"
            >
              <h4>Home page background</h4>
            </a>
            <p>Sourced from "Wallpaper Access"</p>
            <br />

            <a
              className="credit__link"
              href="https://openclipart.org/detail/289068/seamless-circuit-texture"
            >
              <h4>Contact page background</h4>
            </a>
            <p>
              Sourced from OpenClipArt. All works here are in the public domain
            </p>
            <br />

            <a
              className="credit__link"
              href="https://www.iconfinder.com/icons/1016074/mail_email_inbox_message_icon"
            >
              <h4>Footer email icon</h4>
            </a>
            <p>
              Under Creative Commons 3.0, from iconfinder, by Aleksei Ryazancev,
              titled "Mail, email, inbox icon". Colour was adapted to suit site
              style
            </p>
            <br />

            <a
              className="credit__link"
              href="https://openclipart.org/detail/26503/mail"
            >
              <h4>Large email icon</h4>
            </a>
            <p>Sourced from OpenClipArt</p>
            <br />

            <a
              className="credit__link"
              href="https://commons.wikimedia.org/wiki/File:Iconoir_terminal-outline.svg"
            >
              <h4>Backend Icon</h4>
            </a>
            <p>Utilised from Wikimedia Commons</p>
            <a className="credit__link" href="https://github.com/lucaburgio">
              <p>Created by Luca Burgio</p>
            </a>
            <br />

            <a
              className="credit__link"
              href="https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20"
            >
              <h4>Wumpus Icon</h4>
            </a>
            <p>Generated using patorjk.com</p>
            <br />

            <h4>
              Icons for Technologies are used from the brand's given website.
              Some are colour corrected to fit with the site's theme
            </h4>
          </Card>
        </PageContent>
      </Page>
    </>
  );
}

export default Credit;
