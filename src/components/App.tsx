import Carousel from "./Carousel";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Carousel images={["/t-shirt-0.jpg", "/t-shirt-1.jpg"]} />
    </div>
  );
}

export default App;
