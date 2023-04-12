import { useState } from "react";
import styles from "./slider.module.css";

export default function Slider() {
  // position of slider in pixels
  const [position, setPosition] = useState<number>(0);

  // slider image urls
  const images: string[] = [
    "./image-slide-1.jpg",
    "./image-slide-2.jpg",
    "./image-slide-3.jpg",
    "./image-slide-4.jpg",
    "./image-slide-5.jpg",
  ];

  function handleDecrement() {
    if (position < 572) {
      setPosition((position) => position + 286);
    }
  }

  function handleIncrement() {
    if (position > -572) {
      setPosition((position) => position - 286);
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.slide} style={{ translate: position }}>
          {images.map((image) => (
            <li key={image}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>

      <fieldset className={styles.controls}>
        <button onClick={handleDecrement}>
          <img src="./icon-arrow-left.svg" alt="" />
        </button>
        <button onClick={handleIncrement}>
          <img src="./icon-arrow-right.svg" alt="" />
        </button>
      </fieldset>
    </div>
  );
}
