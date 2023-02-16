import "./BannerImage.css";

interface props {
  src: string;
  alt: string;
  imgClass: string;
  className: string;
  children?: any;
}

function Banner({ src, alt, imgClass, className, children }: props) {
  return (
    <div className="banner-image__bg">
      <div className={"banner-image " + (className ? className : "")}>
        <img
          src={src}
          alt={alt}
          className={"banner-image__img " + (imgClass ? imgClass : "")}
        />
        <div className="banner-img__children">{children}</div>
      </div>
    </div>
  );
}

export default Banner;
