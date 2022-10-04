import Carousel from "./Carousel";

import styles from "./App.module.scss";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Carousel
          images={["/t-shirt-0.jpg", "/t-shirt-1.jpg", "/t-shirt-2.jpg"]}
        />
        <ProductDetail
          categories={[
            {
              href: "/home",
              label: "Home",
            },
            {
              href: "/men",
              label: "Men",
            },
            {
              href: "/men/t-shirts",
              label: "T-Shirts",
            },
          ]}
          colors={[
            {
              label: "White",
              hex: "#fff",
            },
            {
              label: "Gray",
              hex: "#999",
            },
            {
              label: "Black",
              hex: "#000",
            },
          ]}
          name="White T-Shirt"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          price="$49"
          sizes={["xs", "s", "m", "l", "xl"]}
        />
      </div>
    </div>
  );
}

export default App;
