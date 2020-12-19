import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [searchText, setsearchText] = React.useState("");
  const handleChange = event => {
    setsearchText(event.target.value);
  };
  return (
    <div className={styles.base}>
      <div className={styles.searchIcon}>
        <svg
          width="32"
          height="32"
          className={styles.search}
          version="1.1"
          viewBox="0 0 32 32"
          aria-hidden="false"
        >
          <path d="M21.9 20.1c1.3-1.7 2-3.8 2-6.1 0-5.5-4.5-10-10-10C8.5 4 4 8.5 4 14s4.5 10 10 10c2.3 0 4.4-.8 6.1-2l6.1 6.1 1.9-1.9-6.2-6.1zM14 21.3c-4.1 0-7.3-3.3-7.3-7.3S9.9 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
        </svg>
      </div>
      <div className={styles.inputHolder} style={{ width: props.width }}>
        <input
          type="search"
          name="searchKeyword"
          placeholder="Search free high-resolution photos"
          onChange={event => handleChange(event)}
          className={styles.input}
          title="Search Unsplash"
          value={searchText}
        />
      </div>
    </div>
  );
}
