import React from "react";

import styles from "./Home.module.css";

import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Title from "../../components/Title";

import movies from "../../json/db.json";

export default function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>A place for you to gather your favorite movies and series!</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card key={movie.id} id={movie.id} title={movie.Title} cover={movie.Images[0]} plot={movie.Plot} />;
        })}
      </section>
    </>
  );
}
