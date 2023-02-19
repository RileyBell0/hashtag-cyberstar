import "./PageContent.css";

interface props {
  children: any;
  className?: string;
}

function PageContent({ children, className }: props) {
  return (
    <div className={`${className ? className : ""} page-content`}>
      {children}
    </div>
  );
}

export default PageContent;
