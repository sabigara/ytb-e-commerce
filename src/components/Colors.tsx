import React from "react";
import styles from "./Colors.module.scss";

type Props = {
  items: { value: string; hex: string }[];
};

export default function Colors({ items }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color:</h2>
      <fieldset className={styles.fieldset}>
        {items.map(({ value, hex }, i) => (
          <label key={hex} className={styles.label}>
            <input
              type="radio"
              name="color"
              value={value}
              className={styles.input}
              defaultChecked={i === 0}
            />
            <div className={styles.item}>
              <div
                className={styles.itemColor}
                style={{
                  backgroundColor: hex,
                }}
              />
            </div>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
