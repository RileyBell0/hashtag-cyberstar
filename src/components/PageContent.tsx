import "./PageContent.css";

interface props {
  children: any;
}

function PageContent({ children }: props) {
  return <div className="page-content">{children}</div>;
}

export default PageContent;
