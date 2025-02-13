/**
 * =========================================================
 * File: /pages/_app.js (Next.js)
 * Descripción: Envuelve la aplicación para incluir Head y
 * estilos globales.
 * Principios aplicados:
 * - SRP: Solo maneja la inicialización de la app.
 * - DIP: Dependencias de la app (Head, CSS) se definen aquí.
 * =========================================================
 */

import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AutoCorp - Agencia Premium</title>
        <meta
          name="description"
          content="Descubre soluciones automotrices premium y acelera tu éxito corporativo."
        />
        <meta
          name="keywords"
          content="autos, concesionaria, flotas, leasing, servicios, postventa, innovación"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AutoCorp - Agencia Premium" />
        <meta
          property="og:description"
          content="Soluciones automotrices de vanguardia para impulsar tu negocio."
        />
        <meta property="og:image" content="/hero1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AutoCorp - Agencia Premium" />
        <meta
          name="twitter:description"
          content="Soluciones automotrices de vanguardia para impulsar tu negocio."
        />
        <meta name="twitter:image" content="/hero1.webp" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
