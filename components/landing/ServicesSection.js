'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function ServicesSection() {
  const theme = useTheme();

  const servicesData = [
    {
      icon: (
        <DirectionsCarFilledIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: 'Venta de Autos Nuevos',
      description:
        'Encuentra las últimas novedades de las marcas más importantes, con garantía y respaldo oficial.',
    },
    {
      icon: (
        <EngineeringIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: 'Servicio de Taller',
      description:
        'Mantenimientos, reparaciones y checks preventivos con técnicos certificados.',
    },
    {
      icon: (
        <HandshakeIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
      title: 'Financiamiento y Leasing',
      description:
        'Diversas opciones de pago para que te lleves el auto de tus sueños sin dolores de cabeza.',
    },
    {
      icon: (
        <MiscellaneousServicesIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.main }}
        />
      ),
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
        py: { xs: 8, md: 10 },
        background: '#ffffff',
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
            mb: 4,
            color: '#2a3d66',
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
            mb: 6,
            color: '#4e4e4e',
            fontSize: '1.1rem',
          }}
        >
          Te acompañamos en cada paso, desde el momento en que elegís tu modelo
          hasta el mantenimiento y el servicio postventa. Queremos que tu
          experiencia sea impecable.
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
                  p: 4,
                  backgroundColor: '#fafafa',
                  borderRadius: 0,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
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
