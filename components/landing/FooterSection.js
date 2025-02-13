/**
 * =========================================================
 * File: /components/landing/FooterSection.js
 * Descripción: Pie de página con formulario de contacto
 * y datos de la empresa.
 * Principios aplicados:
 * - SRP: Maneja solo el footer y su contenido.
 * - DIP: Podría inyectarse data de contacto desde un servicio.
 * - Clean Code: Estructura clara y mantenible.
 * =========================================================
 */

'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link as MuiLink,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FooterSection() {
  return (
    <Box
      component="footer"
      id="footer-section"
      sx={{
        backgroundColor: '#0a0a0a',
        py: 'var(--spacing-xl)',
      }}
    >
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: { xs: 2, md: 6 } }}>
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
            ¡Hablemos!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: '#1b1b1b',
                  p: 'var(--spacing-md)',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 'var(--spacing-sm)', fontWeight: 'bold', color: '#fff' }}>
                  Envíanos un mensaje
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 'var(--spacing-sm)',
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#2a2a2a',
                        color: '#fff',
                      },
                      '& .MuiInputLabel-root': {
                        color: 'var(--color-text-secondary)',
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 'var(--spacing-sm)',
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#2a2a2a',
                        color: '#fff',
                      },
                      '& .MuiInputLabel-root': {
                        color: 'var(--color-text-secondary)',
                      },
                    }}
                  />
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 'var(--spacing-sm)',
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#2a2a2a',
                        color: '#fff',
                      },
                      '& .MuiInputLabel-root': {
                        color: 'var(--color-text-secondary)',
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: '50px',
                      textTransform: 'none',
                      background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
                      fontWeight: 'bold',
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      '&:hover': {
                        background: `linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%)`,
                      },
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Datos de Contacto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 'var(--spacing-sm)', fontWeight: 'bold', color: '#fff' }}>
                Contáctanos Directamente
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 'var(--spacing-sm)' }}>
                <EmailIcon sx={{ color: 'var(--color-primary)', mr: 1 }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  <MuiLink
                    href="mailto:contacto@autocorp.com"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    contacto@autocorp.com
                  </MuiLink>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 'var(--spacing-sm)' }}>
                <PhoneIcon sx={{ color: 'var(--color-primary)', mr: 1 }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 'var(--spacing-sm)' }}>
                <LocationOnIcon sx={{ color: 'var(--color-primary)', mr: 1 }} />
                <Typography variant="body1" sx={{ color: '#fff' }}>
                  1234 Calle Principal, Ciudad, País
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          mt: 'var(--spacing-lg)',
          color: 'var(--color-text-secondary)',
          fontSize: '0.9rem',
        }}
      >
        © {new Date().getFullYear()} AutoCorp. Todos los derechos reservados.
      </Box>
    </Box>
  );
}
