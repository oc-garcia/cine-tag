import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";

export default function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card id="1" title="title" cover="https://cdn2.thecatapi.com/images/13i.gif" />
      <Footer />
    </>
  );
}
