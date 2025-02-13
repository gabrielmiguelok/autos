/***************************************************************
 * File: /components/chatbot/ChatMessage.js
 * Descripción:
 *  - Renderiza cada mensaje (assistant o user) con animación
 *    "slideUp" + fade.
 *  - Usa ReactMarkdown para parsear links, listados, etc.
 * Principios aplicados:
 *  - SRP: Muestra y anima un único mensaje en el chat.
 *  - KISS/DRY: Animaciones y estilos centralizados.
 ***************************************************************/

import React, { useEffect, useRef } from 'react';
import { Paper, List, ListItem, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { keyframes } from '@emotion/react';

// Animación "slideUp" + fade
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function ChatMessage({ role, content }) {
  const isAssistant = role === 'assistant';

  // Reemplaza ***...*** por un div ctaBox
  const parsedContent = content.replace(
    /\*\*\*(.*?)\*\*\*/gs,
    (_, p1) => `<div class="ctaBox">${p1}</div>`
  );

  const containerRef = useRef(null);

  useEffect(() => {
    // Al montar, aplicamos la animación
    if (containerRef.current) {
      containerRef.current.style.animation = `${slideUp} 0.3s ease forwards`;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: isAssistant ? 'flex-start' : 'flex-end',
        marginBottom: '0.6rem',
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 1.5,
          maxWidth: '90%',
          borderRadius: isAssistant ? '14px 14px 14px 0' : '14px 14px 0 14px',
          // Usamos variables globales: al Asistente le damos un fondo primario oscuro,
          // al usuario un fondo secundario o algo que contraste. Ajusta a tu gusto.
          backgroundColor: isAssistant ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
          color: '#ffffff',
          fontSize: '0.95rem',
          lineHeight: 1.4,
        }}
      >
        <ReactMarkdown
          children={parsedContent}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={mdComponents}
        />
      </Paper>
    </div>
  );
}

// Configuración de Markdown
const mdComponents = {
  div: ({ node, className, ...props }) => {
    if (className === 'ctaBox') {
      return (
        <div
          style={{
            border: '1px solid var(--color-secondary)',
            borderRadius: '8px',
            padding: '0.8rem',
            margin: '0.7rem 0',
            fontWeight: 'bold',
            backgroundColor: 'var(--color-bg-light)',
            color: 'var(--color-text-primary)',
          }}
          {...props}
        />
      );
    }
    return <div {...props} />;
  },
  h1: ({ node, ...props }) => (
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }} {...props} />
  ),
  h2: ({ node, ...props }) => (
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }} {...props} />
  ),
  h3: ({ node, ...props }) => (
    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }} {...props} />
  ),
  ul: ({ node, ...props }) => (
    <List sx={{ listStyleType: 'disc', pl: 3, mb: 1 }} {...props} />
  ),
  ol: ({ node, ...props }) => (
    <List sx={{ listStyleType: 'decimal', pl: 3, mb: 1 }} {...props} />
  ),
  li: ({ node, ...props }) => (
    <ListItem
      sx={{
        display: 'list-item',
        pl: 0,
        py: 0.3,
        alignItems: 'start',
      }}
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <Typography
      variant="body2"
      sx={{ mb: 0.8, fontSize: '0.95rem', lineHeight: 1.5 }}
      {...props}
    />
  ),
};
