import React, { useState } from "react";
import styles from "./TabHeader.module.css";
import { tabOption } from "../utils/constant";
export default function TabHeader(props) {
  const [tab, settab] = useState(tabOption[0].value);
  return (
    <div className={styles.base} style={{ top: props.top }}>
      <div className={styles.container}>
        {tabOption?.map(val => (
          <div className={styles.tabHolder} onClick={() => settab(val.value)}>
            <div className={tab === val.value ? styles.tabActive : styles.tab}>
              {val.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
