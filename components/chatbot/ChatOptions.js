/***************************************************************
 * File: /components/chatbot/ChatOptions.js
 * Descripción:
 *  - Renderiza botones con las opciones de cada estado.
 *  - Animación fadeInUp.
 * Principios aplicados:
 *  - SRP: Botones de opciones sin lógica de estado.
 *  - KISS: Simple lista de botones con onSelect.
 ***************************************************************/

import React from 'react';
import { Stack, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function ChatOptions({ options, onSelect }) {
  if (!options || options.length === 0) return null;

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        mt: 2,
        animation: `${fadeInUp} 0.3s ease-in-out`,
      }}
    >
      {options.map((option, i) => (
        <Button
          key={i}
          variant="contained"
          onClick={() => onSelect(option)}
          sx={{
            textTransform: 'none',
            fontSize: '0.85rem',
            fontWeight: '500',
            borderRadius: '20px',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            transition: 'transform 0.1s ease-in-out',
            '&:hover': {
              backgroundColor: 'var(--color-primary-dark)',
              transform: 'scale(1.02)',
            },
          }}
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
}
