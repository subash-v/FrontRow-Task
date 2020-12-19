import React from "react";
import styles from "./Explore.module.css";
import { imageObj } from "../utils/constant";
export default function Explore() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        {imageObj?.map((val, i) => (
          <figure className={styles.item}>
            <img src={val.imageUrl} className={styles.img} />
          </figure>
        ))}
      </div>
    </div>
  );
}
