import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import styles from "./App.module.css";
import Trail from "./components/Trail";
import Scatterplot from "./components/Scatterplot";

function App() {
  const parallax = useRef(null);

  return (
    <div className="App">
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          className={styles["title-parallax"]}
        >
          <Trail>
            <h1 className={styles["main-header"]}>Kristian Nilsson.</h1>
            <h2 className={styles["sub-header"]}>I work with data.</h2>
          </Trail>
          <Scatterplot />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          className={styles["title-parallax"]}
        >
          <h2 className={styles["people-header"]}>People I've worked with</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
