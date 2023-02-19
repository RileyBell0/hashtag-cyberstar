import Page from "../components/Page";
import PageContent from "../components/PageContent";
import Window from "../components/Window";

function Projects() {
  return (
    <Page>
      <PageContent>
        <Window title="projects" info={["items: 1", "2019-2023", "university"]}>
          <h1>Projects</h1>
        </Window>
      </PageContent>
    </Page>
  );
}

export default Projects;
