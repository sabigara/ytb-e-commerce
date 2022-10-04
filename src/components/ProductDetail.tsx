import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import styles from "./ProductDetail.module.scss";

type Props = {
  categories: { label: string; href: string }[];
  name: string;
  description: string;
  price: string;
  colors: { label: string; hex: string }[];
  sizes: string[];
};

export default function ProductDetail({
  categories,
  name,
  description,
  price,
  colors,
  sizes,
}: Props) {
  return (
    <div className={styles.container}>
      <Breadcrumbs items={categories} />
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.price}>{price}</div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.colors}>
        {colors.map((color) => (
          <li key={color.hex}>{color.label}</li>
        ))}
      </ul>
      <ul className={styles.sizes}>
        {sizes.map((size) => (
          <li key={size}>{size}</li>
        ))}
      </ul>
      <Button>Add to cart</Button>
    </div>
  );
}
