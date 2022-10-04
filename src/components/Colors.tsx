import styles from "./Colors.module.scss";

type Props = {
  items: { value: string; hex: string }[];
};

export default function Colors({ items }: Props) {
  return (
    <fieldset className={styles.container}>
      {items.map(({ value, hex }) => (
        <label className={styles.label}>
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
  );
}
