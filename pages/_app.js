import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AutoMaster - Agencia de Autos</title>
        <meta
          name="description"
          content="Concesionaria y agencia de autos. Encuentra el vehículo ideal y acelera con nuestras ofertas exclusivas."
        />
        <meta
          name="keywords"
          content="autos, concesionaria, coches, venta de autos, financiamiento, autos nuevos, autos usados"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AutoMaster - Tu Agencia de Autos" />
        <meta
          property="og:description"
          content="Descubre las mejores ofertas en vehículos y servicios postventa."
        />
        <meta property="og:image" content="/hero-slide-1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synara.tech.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AutoMaster - Tu Agencia de Autos" />
        <meta
          name="twitter:description"
          content="Descubre las mejores ofertas en vehículos y servicios postventa."
        />
        <meta name="twitter:image" content="/hero-slide-1.webp" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
