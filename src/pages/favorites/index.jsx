import React from "react";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

import styles from "./index";

export default function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
    </>
  );
}
