import "./Window.css";

interface props {
  children: any;
  title?: string;
  info?: string[];
}

function Window({ children, title, info }: props) {
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
          {title !== undefined ? (
            <h3 className="window__title-bar__content__title">{title}</h3>
          ) : (
            ""
          )}

          <div className="window__title-bar__content__square" />
        </div>
      </div>

      <div className="window__info-bar">
        {info !== undefined
          ? info.map((value: string) => (
              <p className="window__info-bar__text">{value}</p>
            ))
          : ""}
      </div>
      <div className="window__content">{children}</div>
    </div>
  );
}

export default Window;
