import React from "react";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../hooks/FavoriteContext";
import Card from "../../components/Card";

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner image="favorites" />
      {favorite.length === 0 ? (
        <Title>
          <h1>Looks like you don't have any favorites yet!</h1>
        </Title>
      ) : (
        <Title>
          <h1>Your favorites movies and series!</h1>
        </Title>
      )}
      <section className={styles.container}>
        {favorite.map((movie) => {
          return <Card key={movie.title} id={movie.title} title={movie.title} cover={movie.cover} />;
        })}
      </section>
    </>
  );
}
