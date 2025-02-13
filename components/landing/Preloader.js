/**
 * =========================================================
 * File: /components/landing/Preloader.js
 * Descripción: Componente de pantalla completa para mostrar
 * un remolino animado antes de revelar el Hero.
 * Principios aplicados:
 * - SRP: Maneja solo la lógica y vista del preloader.
 * - KISS: Animación CSS simple, con estado isLoading.
 * - Menor Sorpresa: Se desmonta apenas termina la simulación.
 * =========================================================
 */

'use client';

import React, { useEffect } from 'react';
import { Box } from '@mui/material';

export default function Preloader({ onFinish }) {
  // Simulamos que el “cargando” dura ~2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--color-bg-default)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Contenedor del remolino */}
      <Box
        sx={{
          width: 'var(--loader-size)',
          height: 'var(--loader-size)',
          border: `4px solid var(--color-secondary)`,
          borderTop: `4px solid var(--color-primary)`,
          borderRadius: '50%',
          animation: 'swirlSpin 1.2s infinite linear',
        }}
      />
    </Box>
  );
}
