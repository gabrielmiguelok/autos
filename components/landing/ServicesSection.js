/**
 * =========================================================
 * File: /components/landing/ServicesSection.js
 * Descripción: Sección para servicios generales,
 * con borde neon y fondos oscuros.
 * Principios aplicados:
 * - SRP: Mostrar servicios disponibles.
 * - DIP: Data local, separable si se requiere.
 * - DRY: Patrón repetido en tarjetas.
 * =========================================================
 */

'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function ServicesSection() {
  const servicesData = [
    {
      icon: <DirectionsCarFilledIcon fontSize="large" />,
      title: 'Venta de Autos Nuevos',
      description:
        'Encuentra las últimas novedades de las marcas más importantes, con garantía y respaldo oficial.',
    },
    {
      icon: <EngineeringIcon fontSize="large" />,
      title: 'Servicio de Taller',
      description:
        'Mantenimientos, reparaciones y checks preventivos con técnicos certificados.',
    },
    {
      icon: <HandshakeIcon fontSize="large" />,
      title: 'Financiamiento y Leasing',
      description:
        'Diversas opciones de pago y planes a tu medida para que te lleves el auto de tus sueños.',
    },
    {
      icon: <MiscellaneousServicesIcon fontSize="large" />,
      title: 'Servicio Postventa',
      description:
        'Soporte integral y repuestos originales para que tu vehículo siempre esté en óptimas condiciones.',
    },
  ];

  return (
    <Box
      component="section"
      id="services-section"
      sx={{
        position: 'relative',
        py: 'var(--spacing-xl)',
        backgroundColor: '#111',
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
            color: 'var(--color-secondary)',
          }}
        >
          Nuestros Servicios
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
          Te acompañamos desde la elección de tu vehículo hasta el mantenimiento
          y servicio postventa. Queremos que tu experiencia sea excepcional.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {servicesData.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 'var(--spacing-md)',
                  backgroundColor: '#1e1e1e',
                  border: '1px solid var(--color-secondary)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,255,255,0.05)',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: 'var(--color-primary)',
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 1, color: '#fff' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                  {service.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
