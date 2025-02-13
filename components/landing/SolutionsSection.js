/**
 * =========================================================
 * File: /components/landing/SolutionsSection.js
 * Descripción: Sección con soluciones corporativas.
 * Estilo dark-neon y transiciones elevadas.
 * Principios aplicados:
 * - SRP: Muestra solo la parte de soluciones.
 * - DIP: Data de soluciones inyectada localmente (podría venir de un service).
 * - DRY: Repetición de tarjetas con mismo estilo.
 * =========================================================
 */

'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function SolutionsSection() {
  return (
    <Box
      component="section"
      id="solutions-section"
      sx={{
        py: 'var(--spacing-xl)',
        backgroundColor: '#0d0d0d',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 'var(--spacing-md)',
            color: 'var(--color-primary)',
          }}
        >
          Nuestras Soluciones
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            mb: 'var(--spacing-lg)',
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
          }}
        >
          Desde la adquisición de flotas hasta el soporte técnico y financiamiento,
          te brindamos un servicio integral para que tu empresa avance sin
          contratiempos.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {[
          {
            icon: <DirectionsCarIcon fontSize="large" />,
            title: 'Flotas Corporativas',
            description:
              'Gestionamos la adquisición y mantenimiento de vehículos para tu empresa, optimizando costos y tiempos.',
          },
          {
            icon: <EngineeringIcon fontSize="large" />,
            title: 'Servicio Técnico',
            description:
              'Talleres especializados y personal certificado para atender tus vehículos con rapidez y calidad.',
          },
          {
            icon: <LocalAtmIcon fontSize="large" />,
            title: 'Financiamiento',
            description:
              'Ofrecemos planes de crédito y leasing corporativo para que puedas adquirir tu flota sin descapitalizarte.',
          },
          {
            icon: <HandshakeIcon fontSize="large" />,
            title: 'Consultoría & Alianzas',
            description:
              'Te asesoramos en el diseño de tu proyecto automotriz y establecemos conexiones estratégicas.',
          },
        ].map((sol, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 'var(--spacing-md)',
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 4px 20px rgba(0,255,255,0.05)',
                  borderRadius: '8px',
                  transition: 'transform var(--transition-base)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 'var(--spacing-sm)',
                    color: 'var(--color-secondary)',
                  }}
                >
                  {sol.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)', color: '#fff' }}
                >
                  {sol.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                  {sol.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
