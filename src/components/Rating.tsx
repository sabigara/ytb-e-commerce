import { ReactComponent as StartSvg } from "../icons/star.svg";

import styles from "./Rating.module.scss";

type Props = { max?: number; value: number };

export default function Rating({ max = 5, value }: Props) {
  return (
    <div className={styles.container}>
      {Array(max)
        .fill(0)
        .map((_, i) => (
          <StartSvg
            className={styles["star" + (i + 1 <= value ? "--active" : "")]}
          />
        ))}
    </div>
  );
}
