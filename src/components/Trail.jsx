import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import styles from "./Trail.module.css";

function Trail({ children }) {
  const items = React.Children.toArray(children);
  const [open, setOpen] = useState(true);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
  });
  return (
    <div onClick={() => setOpen(!open)} className={styles["container"]}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style} className={styles["trails-text"]}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

export default Trail;
