'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about-section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-bg-default)',
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 }, mb: 'var(--spacing-lg)' }}>
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
            Quiénes Somos
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
            En <strong>AutoCorp</strong>, nos apasiona la industria automotriz y
            nos enfocamos en ofrecer soluciones adaptadas a las necesidades
            corporativas. Desde la venta de vehículos hasta la consultoría y
            servicio postventa, nuestro equipo trabaja para impulsar tu negocio
            hacia el éxito.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-light)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              }}
            >
              <EmojiObjectsIcon
                sx={{
                  color: 'var(--color-primary)',
                  fontSize: '3rem',
                  mb: 'var(--spacing-sm)',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Innovación
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                Incorporamos tecnología y conocimiento de punta para ofrecerte
                las mejores soluciones en el sector automotriz.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-light)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              }}
            >
              <GroupIcon
                sx={{
                  color: 'var(--color-primary)',
                  fontSize: '3rem',
                  mb: 'var(--spacing-sm)',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Equipo Experto
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                Contamos con profesionales en diferentes áreas para brindarte
                asesoría integral.
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 'var(--spacing-md)',
                backgroundColor: 'var(--color-bg-light)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              }}
            >
              <StarOutlineIcon
                sx={{
                  color: 'var(--color-primary)',
                  fontSize: '3rem',
                  mb: 'var(--spacing-sm)',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 'var(--spacing-xs)' }}>
                Calidad Garantizada
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                Todos nuestros procesos y servicios cuentan con altos estándares
                de calidad y eficiencia.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
