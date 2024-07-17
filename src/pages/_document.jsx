import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es" data-theme="light">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Sistemas HGC: Fabricación y comercialización de autopartes con más de 25 años de experiencia. Tercerizadores de Fiat y Renault. Contáctenos al 4722-0988."
          />
          <meta
            name="keywords"
            content="autopartes, fabricación de autopartes, comercialización de autopartes, tercerización, autopartes para Fiat, autopartes para Renault, industria automotriz, Sistemas HGC"
          />
          <meta name="author" content="Sistemas HGC" />
          <meta name="robots" content="index, follow" />

          <meta
            property="og:title"
            content="Sistemas HGC | Fabricación y Comercialización de Autopartes"
          />
          <meta
            property="og:description"
            content="Sistemas HGC: Fabricación y comercialización de autopartes con más de 25 años de experiencia. Tercerizadores de Fiat y Renault. Contáctenos al 4722-0988."
          />
          <meta
            property="og:image"
            content="../../images/home-image.png" // Reemplazar con la URL real de la imagen
          />
          <meta property="og:url" content="https://www.sistemashgc.com" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Sistemas HGC | Fabricación y Comercialización de Autopartes"
          />
          <meta
            name="twitter:description"
            content="Sistemas HGC: Fabricación y comercialización de autopartes con más de 25 años de experiencia. Tercerizadores de Fiat y Renault. Contáctenos al 4722-0988."
          />
          <meta
            name="twitter:image"
            content="../../images/home-image.png" // Reemplazar con la URL real de la imagen
          />

          <link rel="canonical" href="https://www.sistemashgc.com" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="../../favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
