/**
 * =========================================================
 * File: /pages/_app.js (Next.js)
 * Descripción: Envuelve la aplicación para incluir Head,
 * estilos globales y el chatbot flotante.
 * Principios aplicados:
 * - SRP: Solo maneja la inicialización y layout global de la app.
 * - DIP: Se inyectan global.css, ChatThemeProvider y ChatModal.
 * =========================================================
 */

import React, { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

// Importamos el ThemeProvider del chatbot, el ícono flotante y el modal.
import { ChatThemeProvider } from '../components/chatbot/ChatThemeProvider';
import FloatingChatIcon from '../components/chatbot/FloatingChatIcon';
import ChatModal from '../components/chatbot/ChatModal';

function MyApp({ Component, pageProps }) {
  // Controla si el ChatModal está abierto
  const [openChat, setOpenChat] = useState(false);

  return (
    <ChatThemeProvider>
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

        {/* Contenido principal de la app */}
        <Component {...pageProps} />

        {/* Ícono flotante del chat (si NO está abierto el modal) */}
        {!openChat && (
          <FloatingChatIcon
            onClick={() => setOpenChat(true)}
            bubbleMessage="¿Necesitas ayuda?"
          />
        )}

        {/* Modal del chatbot (si está abierto) */}
        {openChat && (
          <ChatModal onClose={() => setOpenChat(false)} />
        )}
      </>
    </ChatThemeProvider>
  );
}

export default MyApp;
