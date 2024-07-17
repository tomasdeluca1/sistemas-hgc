import { SobreNosotros } from "@/components/sobre-nosotros";
import Head from "next/head";
import React from "react";

const Nosotros = () => {
  return (
    <div>
      <Head>
        <title>Sistemas H G C | Sobre Nosotros</title>
        <meta
          name="description"
          content="Sistemas H G C es una empresa líder en la fabricación y comercialización de piezas automotrices con más de 25 años de experiencia, ofreciendo soluciones innovadoras y de alta calidad para la industria automotriz."
        />
        <meta
          name="keywords"
          content="autopartes, fabricación de autopartes, comercialización de autopartes, industria automotriz, Sistemas HGC, piezas automotrices, historia, misión, valores"
        />
        <meta name="author" content="Sistemas H G C" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sistemas H G C | Sobre Nosotros" />
        <meta
          property="og:description"
          content="Sistemas H G C es una empresa líder en la fabricación y comercialización de piezas automotrices con más de 25 años de experiencia, ofreciendo soluciones innovadoras y de alta calidad para la industria automotriz."
        />
        <meta property="og:image" content="../../images/home-image.png" />
        <meta
          property="og:url"
          content="https://www.sistemashgc.com/sobre-nosotros"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistemas H G C | Sobre Nosotros" />
        <meta
          name="twitter:description"
          content="Sistemas H G C es una empresa líder en la fabricación y comercialización de piezas automotrices con más de 25 años de experiencia, ofreciendo soluciones innovadoras y de alta calidad para la industria automotriz."
        />
        <meta name="twitter:image" content="../../images/home-image.png" />
        <link
          rel="canonical"
          href="https://www.sistemashgc.com/sobre-nosotros"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SobreNosotros />
    </div>
  );
};

export default Nosotros;
