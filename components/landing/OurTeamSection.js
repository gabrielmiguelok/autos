'use client';

import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Carlos Ramírez',
    position: 'Director General',
    photo: '/public/avatar-1.webp', // Ajusta la ruta si tu imagen se llama distinto
  },
  {
    name: 'Lucía Fernández',
    position: 'Gerente de Operaciones',
    photo: '/public/avatar-2.webp',
  },
  {
    name: 'Miguel Torres',
    position: 'Jefe de Taller',
    photo: '/public/avatar-3.webp',
  },
];

export default function OurTeamSection() {
  return (
    <Box
      component="section"
      id="our-team-section"
      sx={{
        backgroundColor: 'var(--color-bg-default)',
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
          Nuestro Equipo
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
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            mb: 'var(--spacing-lg)',
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
          }}
        >
          Conoce a los expertos que lideran cada área de AutoCorp. Su experiencia
          y pasión por la industria automotriz se reflejan en cada proyecto que
          llevamos a cabo.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
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
                  backgroundColor: 'var(--color-bg-light)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <Avatar
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    mb: 'var(--spacing-sm)',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                  {member.position}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
