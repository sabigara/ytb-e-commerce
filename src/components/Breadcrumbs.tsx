import styles from "./Breadcrumbs.module.scss";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <ol className={styles.list}>
      {items.map(({ label, href }, i) => (
        <li key={href}>
          <a href={href}>{label}</a>
          {i < items.length - 1 && <span className={styles.separator}>/</span>}
        </li>
      ))}
    </ol>
  );
}
