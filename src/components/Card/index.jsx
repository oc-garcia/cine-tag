import React from "react";
import styles from "./Card.module.css";
import favIcon from "./favorite_outline.png";
export default function Card({ id, title, cover }) {
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img src={favIcon} alt="Mark as favorite" className={styles.favIcon} />
    </div>
  );
}
