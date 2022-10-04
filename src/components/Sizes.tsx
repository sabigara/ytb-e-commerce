import styles from "./Sizes.module.scss";

type Props = {
  items: string[];
};

export default function Sizes({ items }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Size:</h2>
      <fieldset className={styles.fieldset}>
        {items.map((value) => (
          <label key={value} className={styles.label}>
            <input
              type="radio"
              name="size"
              value={value}
              className={styles.input}
            />
            <div className={styles.item}>{value.toUpperCase()}</div>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
