import styles from "./Highlights.module.scss";

type Props = {
  items: string[];
};

export default function Highlights({ items }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Highlights:</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
