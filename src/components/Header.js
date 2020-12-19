import React from "react";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar.js";
export default function Header() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <div className={styles.holder}>
          <div className={styles.logoHolder} title="Home — Unsplash" href="/">
            <svg
              width="32"
              height="32"
              class="_1Jlgk"
              version="1.1"
              viewBox="0 0 32 32"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoText}>Unsplash</span>
              <span className={styles.logoTagLine}>Photos for everyone</span>
            </div>
          </div>
        </div>
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
