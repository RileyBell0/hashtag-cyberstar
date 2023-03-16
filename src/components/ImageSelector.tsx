import "./styles/ImageSelector.css";
import { useState } from "react";
import Window from "./Window";

function ImageSelector({ images }: { images: Array<Array<string>> }) {
  const NAME_INDEX = 0;
  const SRC_INDEX = 1;
  const ALT_INDEX = 2;
  const DESC_INDEX = 3;

  const [selected_img, setSelectedImg] = useState(images[0]);

  const ImageSelectorButton = ({
    selected_img,
  }: {
    selected_img: Array<string>;
  }) => {
    const [stored_img] = useState(selected_img);

    return (
      <button
        className="image-selector__files__file-container"
        onClick={() => setSelectedImg(stored_img)}
      >
        <h5 className="image-selector__files__file__name no-margin">
          {stored_img[NAME_INDEX]}
        </h5>
        <h5 className="image-selector__files__file__selector no-margin">
          &gt;
        </h5>
      </button>
    );
  };

  return (
    <Window
      className="image-selector-container"
      title="images"
      info={[images.length + " items"]}
    >
      <div className="image-selector">
        <div className="image-selector__files">
          <div className="image-selector__files-container">
            {images.map((img_details: Array<string>) => {
              return <ImageSelectorButton selected_img={img_details} />;
            })}
          </div>
          <p className="image-selector__results">
            {images.length} results found
          </p>
        </div>
        <div className="image-selector__display-container">
          <img
            className="image-selector__display"
            src={selected_img[SRC_INDEX]}
            alt={selected_img[ALT_INDEX]}
          />
          <p>{selected_img[DESC_INDEX]}</p>
        </div>
      </div>
    </Window>
  );
}

export default ImageSelector;
