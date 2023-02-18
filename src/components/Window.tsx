import "./Window.css";

interface props {
  children: any;
  title?: string;
  info?: string[];
}

function Window({ children }: props) {
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-bar__lines">
          <div className="window__title-bar__line" />
          <div className="window__title-bar__line" />
          <div className="window__title-bar__line" />
          <div className="window__title-bar__line" />
        </div>
        <div className="window__title-bar__content">
          <h3 className="window__title-bar__content__title">
            featured_project
          </h3>
          <div className="window__title-bar__content__square" />
        </div>
      </div>

      <div className="window__info-bar">
        <p className="window__info-bar__text">items: 1</p>
        <p className="window__info-bar__text">2023</p>
        <p className="window__info-bar__text">University of Melbourne</p>
      </div>
      <div className="window__content">{children}</div>
    </div>
  );
}

export default Window;
