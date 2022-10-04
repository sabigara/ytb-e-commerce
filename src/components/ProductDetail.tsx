import React from "react";
import styles from "./ProductDetail.module.scss";

type Props = {
  categories: { label: string; href: string }[];
  name: string;
  description: string;
  price: string;
  colors: string[]; // in HEX
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
      <ul>
        {categories.map((category) => (
          <li key={category.href}>{category.label}</li>
        ))}
      </ul>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{price}</div>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <ul>
        {sizes.map((size) => (
          <li key={size}>{size}</li>
        ))}
      </ul>
    </div>
  );
}
