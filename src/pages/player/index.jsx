import React from "react";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

import styles from "./Player.module.css";
import movies from "../../json/db.json";
import { useParams } from "react-router-dom";
import NotFound from "../notfound";

export default function Player() {
  const prmt = useParams();
  const video = movies.find((video) => video.id === Number(prmt.id));
  console.log(video);

if(!video) {
  return (
   <NotFound/>
  );
}

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.video}
          title={video.Title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </section>
    </>
  );
}
