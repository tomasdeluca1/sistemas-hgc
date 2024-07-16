import { HomePage } from "@/components/home-page";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>Sistemas H G C | Proveedor Líder de Piezas Automotrices</title>
        <meta
          name="description"
          content="Sistemas H G C es el proveedor líder de piezas automotrices de alta calidad, sirviendo a la industria automotriz desde hace más de una década con experiencia e innovación."
        />
        <meta
          name="keywords"
          content="autopartes, fabricación de autopartes, comercialización de autopartes, industria automotriz, Sistemas HGC, piezas automotrices"
        />
        <meta name="author" content="Sistemas H G C" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Sistemas H G C | Proveedor Líder de Piezas Automotrices"
        />
        <meta
          property="og:description"
          content="Sistemas H G C es el proveedor líder de piezas automotrices de alta calidad, sirviendo a la industria automotriz desde hace más de una década con experiencia e innovación."
        />
        <meta property="og:image" content="../../images/home-image.png" />
        <meta property="og:url" content="https://www.sistemashgc.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sistemas H G C | Proveedor Líder de Piezas Automotrices"
        />
        <meta
          name="twitter:description"
          content="Sistemas H G C es el proveedor líder de piezas automotrices de alta calidad, sirviendo a la industria automotriz desde hace más de una década con experiencia e innovación."
        />
        <meta name="twitter:image" content="../../images/home-image.png" />
        <link rel="canonical" href="https://www.sistemashgc.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default index;
