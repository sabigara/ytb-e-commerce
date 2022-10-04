import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import Colors from "./Colors";
import Highlights from "./Highlights";
import Rating from "./Rating";
import Sizes from "./Sizes";
import { ReactComponent as CartSvg } from "../icons/cart.svg";

import styles from "./ProductDetail.module.scss";

type Props = {
  categories: { label: string; href: string }[];
  name: string;
  description: string;
  price: string;
  colors: { label: string; hex: string }[];
  sizes: string[];
  rating: number;
  numOfReview: number;
  highlights: string[];
};

export default function ProductDetail({
  categories,
  name,
  description,
  price,
  colors,
  sizes,
  rating,
  numOfReview,
  highlights,
}: Props) {
  return (
    <div className={styles.container}>
      <Breadcrumbs items={categories} />
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.price}>{price}</div>
      <div className={styles.reviews}>
        <Rating max={5} value={rating} />
        <a href="#">{numOfReview} reviews</a>
      </div>
      <p className={styles.description}>{description}</p>
      <Highlights items={highlights} />
      <Colors
        items={colors.map((c) => ({
          hex: c.hex,
          value: c.label,
        }))}
      />
      <Sizes items={sizes} />
      <div className={styles.addToCartWrap}>
        <Button>
          <CartSvg width="1.25rem" height="1.25rem" /> Add to cart
        </Button>
      </div>
    </div>
  );
}
