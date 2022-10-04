import styles from "./Colors.module.scss";

type Props = {
  items: { value: string; hex: string }[];
};

export default function Colors({ items }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color:</h2>
      <fieldset className={styles.fieldset}>
        {items.map(({ value, hex }) => (
          <label key={hex} className={styles.label}>
            <input
              type="radio"
              name="color"
              value={value}
              className={styles.input}
            />
            <div
              className={styles.item}
              style={{
                backgroundColor: hex,
              }}
            />
          </label>
        ))}
      </fieldset>
    </div>
  );
}
