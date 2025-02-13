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
        backgroundColor: 'var(--color-bg-light)',
        py: 'var(--spacing-xl)',
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
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-default)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform var(--transition-base)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <DirectionsCarIcon
                fontSize="large"
                sx={{ color: 'var(--color-primary)', mb: 'var(--spacing-sm)' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Flotas Corporativas
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                Gestionamos la adquisición y mantenimiento de vehículos para tu
                empresa, optimizando costos y tiempos.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-default)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform var(--transition-base)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <EngineeringIcon
                fontSize="large"
                sx={{ color: 'var(--color-primary)', mb: 'var(--spacing-sm)' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Servicio Técnico
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                Contamos con talleres especializados y personal certificado para
                atender tus vehículos con rapidez y calidad.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-default)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform var(--transition-base)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <LocalAtmIcon
                fontSize="large"
                sx={{ color: 'var(--color-primary)', mb: 'var(--spacing-sm)' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Financiamiento
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                Ofrecemos planes de crédito y leasing corporativo para que puedas
                adquirir tu flota sin descapitalizar tu empresa.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-default)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform var(--transition-base)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <HandshakeIcon
                fontSize="large"
                sx={{ color: 'var(--color-primary)', mb: 'var(--spacing-sm)' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Consultoría y Alianzas
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                Te asesoramos en el diseño de tu proyecto automotriz y generamos
                alianzas estratégicas para impulsar tu crecimiento.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
