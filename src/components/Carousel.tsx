import React from "react";
import { ReactComponent as ChevronRight } from "../icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../icons/chevron-left.svg";

import styles from "./Carousel.module.scss";

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const listRef = React.useRef<HTMLUListElement>(null!);
  const [index, setIndex] = React.useState(0);
  const scroll = (direction: "previous" | "next") => {
    const newIndex = Math.min(
      images.length - 1,
      Math.max(0, direction === "next" ? index + 1 : index - 1)
    );
    listRef.current.scrollTo({
      left: newIndex * listRef.current.getBoundingClientRect().width,
    });
    setIndex(newIndex);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list} ref={listRef}>
        {images.map((src) => (
          <li key={src} className={styles.item}>
            <img src={src} className={styles.img} />
          </li>
        ))}
      </ul>
      <button
        className={styles.buttonLeft}
        aria-label="previous image"
        onClick={() => scroll("previous")}
      >
        <ChevronLeft />
      </button>
      <button
        className={styles.buttonRight}
        aria-label="next image"
        onClick={() => scroll("next")}
      >
        <ChevronRight />
      </button>
      <Indicator length={images.length} current={index} />
    </div>
  );
}

type IndicatorProps = {
  length: number;
  current: number;
};

function Indicator({ length, current }: IndicatorProps) {
  return (
    <div className={styles.indicator}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <div
            className={
              styles[`indicator__dot${current === i ? "--active" : ""}`]
            }
          />
        ))}
    </div>
  );
}
