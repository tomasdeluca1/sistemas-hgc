import { ContactComponent } from "@/components/contact";
import Head from "next/head";
import React from "react";

const ContactoPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Sistemas H G C</title>
        <meta
          name="description"
          content="Contacta con Sistemas H G C, líder en fabricación y comercialización de piezas automotrices. Llámanos al +54 11 4722-0988 o envíanos un mensaje a través de nuestro formulario de contacto."
        />
        <meta
          name="keywords"
          content="contacto, piezas automotrices, Sistemas HGC, industria automotriz, llamar, enviar mensaje"
        />
        <meta name="author" content="Sistemas H G C" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us | Sistemas H G C" />
        <meta
          property="og:description"
          content="Contacta con Sistemas H G C, líder en fabricación y comercialización de piezas automotrices. Llámanos al +54 11 4722-0988 o envíanos un mensaje a través de nuestro formulario de contacto."
        />
        <meta property="og:image" content="../../images/home-image.png" />
        <meta
          property="og:url"
          content="https://www.sistemashgc.com/contacto"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Sistemas H G C" />
        <meta
          name="twitter:description"
          content="Contacta con Sistemas H G C, líder en fabricación y comercialización de piezas automotrices. Llámanos al +54 11 4722-0988 o envíanos un mensaje a través de nuestro formulario de contacto."
        />
        <meta name="twitter:image" content="../../images/home-image.png" />
        <link rel="canonical" href="https://www.sistemashgc.com/contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactComponent />
    </div>
  );
};

export default ContactoPage;
