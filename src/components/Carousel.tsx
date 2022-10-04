import React from "react";
import { ReactComponent as ChevronRight } from "../icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../icons/chevron-left.svg";

import styles from "./Carousel.module.scss";

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const listRef = React.useRef<HTMLUListElement>(null);
  const scroll = (direction: "previous" | "next") => {
    listRef.current?.scrollBy({
      left: direction === "next" ? 1 : -1,
    });
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
      <div>
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
      </div>
    </div>
  );
}
