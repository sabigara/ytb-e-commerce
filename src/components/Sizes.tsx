import styles from "./Sizes.module.scss";

type Props = {
  items: string[];
};

export default function Sizes({ items }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Size:</h3>
      <fieldset className={styles.fieldset}>
        {items.map((value) => (
          <label className={styles.label}>
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
