import styles from "./Sizes.module.scss";

type Props = {
  items: string[];
};

export default function Sizes({ items }: Props) {
  return (
    <fieldset className={styles.container}>
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
  );
}
