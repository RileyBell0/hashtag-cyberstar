import "./styles/Window.css";

interface props {
  children: any;
  className?: string;
  title?: string;
  info?: string[];
}

function Window({ children, title, info, className }: props) {
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
              <h6 key={value} className="window__info-bar__text">
                {value.toLowerCase()}
              </h6>
            ))
          : ""}
      </div>
      <div
        className={`${
          className !== undefined ? className : ""
        } window__content`}
      >
        {children}
      </div>
    </div>
  );
}

export default Window;
