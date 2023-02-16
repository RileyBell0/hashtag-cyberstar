import "./Page.css";

interface props {
  children: any;
}
function Page({ children }: props) {
  return <div className="page">{children}</div>;
}

export default Page;
