import "./styles/Page.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface props {
  children: any;
  background?: string;
}
function Page({ children, background }: props) {
  return (
    <>
      <Footer>
        <Navbar />
        <div className="page">
          {background !== undefined ? (
            <div className={`${background} page__bg`} />
          ) : (
            ""
          )}

          {children}
        </div>
      </Footer>
    </>
  );
}

export default Page;
