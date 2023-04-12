import { useEffect, useState } from "react";
import styles from "./slider.module.css";

export default function Slider() {
  // screen width to determine coordinate intervals
  const [width, setWidth] = useState<number | undefined>(window.innerWidth);

  // position of slider in pixels
  const [position, setPosition] = useState<number>(0);

  // update width on window resize
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // slider image urls
  const images: string[] = [
    "./image-slide-1.jpg",
    "./image-slide-2.jpg",
    "./image-slide-3.jpg",
    "./image-slide-4.jpg",
    "./image-slide-5.jpg",
  ];

  function handleDecrement() {
    if (width! < 768) {
      if (position < 572) {
        setPosition((position) => position + 286);
      }
    } else if (width! >= 768) {
      if (position < 1140) {
        setPosition((position) => position + 570);
      }
    }
  }

  function handleIncrement() {
    if (width! < 768) {
      if (position > -572) {
        setPosition((position) => position - 286);
      }
    } else if (width! >= 768) {
      if (position > -1140) {
        setPosition((position) => position - 570);
      }
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
