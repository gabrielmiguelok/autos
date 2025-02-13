import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Ajusta según tus necesidades de seguridad o si usas recursos externos */}
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="unsafe-none" />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="unsafe-none" />

        {/* Ejemplo de preconnect y dns-prefetch a un hosting de imágenes si fuera necesario */}
        <link
          rel="preconnect"
          href="https://source.unsplash.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://source.unsplash.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
