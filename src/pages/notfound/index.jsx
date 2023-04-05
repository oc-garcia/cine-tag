import React from "react";
import Title from "../../components/Title";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <Title>
        <h1>Ops!</h1>
      </Title>
      <p>Página não encontrada.</p>
    </section>
  );
}
