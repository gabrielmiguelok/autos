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
        position: 'relative',
        backgroundColor: 'var(--color-bg-dark)',
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
                  backgroundColor: 'var(--color-bg-default)',
                  p: 'var(--spacing-md)',
                  borderRadius: 0,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 'var(--spacing-sm)', fontWeight: 'bold' }}>
                  Envíanos un mensaje
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 'var(--spacing-sm)' }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 'var(--spacing-sm)' }}
                  />
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 'var(--spacing-sm)' }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 0,
                      textTransform: 'none',
                      backgroundColor: 'var(--color-primary)',
                      fontWeight: 'bold',
                      transition: 'background-color var(--transition-fast)',
                      '&:hover': {
                        backgroundColor: 'var(--color-primary-dark)',
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
              <Typography variant="h6" sx={{ mb: 'var(--spacing-sm)', fontWeight: 'bold' }}>
                Contáctanos Directamente
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 'var(--spacing-sm)' }}>
                <EmailIcon sx={{ color: 'var(--color-primary)', mr: 1 }} />
                <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
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
                <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 'var(--spacing-sm)' }}>
                <LocationOnIcon sx={{ color: 'var(--color-primary)', mr: 1 }} />
                <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
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
