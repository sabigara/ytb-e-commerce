import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import Colors from "./Colors";
import styles from "./ProductDetail.module.scss";
import Sizes from "./Sizes";

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
      <Colors
        items={colors.map((c) => ({
          hex: c.hex,
          value: c.label,
        }))}
      />
      <Sizes items={sizes} />
      <Button>Add to cart</Button>
    </div>
  );
}
