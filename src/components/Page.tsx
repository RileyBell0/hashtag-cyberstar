import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Page.css";

interface props {
  children: any;
  disableFooter?: boolean;
  disableNavbar?: boolean;
  background?: string;
}
function Page({ children, disableFooter, disableNavbar, background }: props) {
  const PageContents = () => {
    return (
      <>
        {disableNavbar !== true ? <Navbar /> : ""}
        <div className="page">
          {background !== undefined ? (
            <div className={`${background} page__bg`} />
          ) : (
            ""
          )}
          {children}
        </div>
      </>
    );
  };

  if (disableFooter !== true) {
    return (
      <Footer>
        <PageContents />
      </Footer>
    );
  } else {
    return <PageContents />;
  }
}

export default Page;
