import "./styles/BannerImage.css";

interface props {
  src: string;
  alt: string;
  imgClass: string;
  className: string;
  children?: any;
}

function Banner({ src, alt, className, children, imgClass }: props) {
  return (
    <div className={"banner-image " + (className ? className + " " : "")}>
      <img src={src} alt={alt} className={"banner-image__bg " + imgClass}></img>
      <div className="banner-content">{children}</div>
    </div>
  );
}

export default Banner;
