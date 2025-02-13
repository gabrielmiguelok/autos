'use client';

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const slidesData = [
  {
    id: 1,
    title: 'Impulsa tu futuro con soluciones automotrices de clase mundial.',
    subtitle: 'Renueva tu flota y acelera tu negocio sin límites.',
    image: '/hero1.webp',
  },
  {
    id: 2,
    title: 'Descubre la fuerza de un aliado corporativo en el mundo automotor.',
    subtitle: 'Optimiza costos, maximiza resultados.',
    image: '/hero2.webp',
  },
  {
    id: 3,
    title: 'AutoCorp: Donde la innovación y la confianza se encuentran.',
    subtitle: 'Atrévete a conducir el cambio.',
    image: '/hero3.webp',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
  };

  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        position: 'relative',
        width: '100%',
        // Ajustamos la altura a toda la ventana
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-light)', // Fallback
      }}
    >
      {/* Slides */}
      <AnimatePresence>
        {slidesData.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Filtro para mejor legibilidad */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '800px',
                    textAlign: 'center',
                    color: '#ffffff',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
                      textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: [slide.title],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 20,
                        pauseFor: 2000,
                      }}
                    />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      mb: 4,
                      textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      backgroundColor: 'var(--color-primary)',
                      color: '#fff',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      transition: 'background-color var(--transition-fast)',
                      '&:hover': {
                        backgroundColor: 'var(--color-primary-dark)',
                      },
                    }}
                    onClick={() => {
                      const footer = document.getElementById('footer-section');
                      if (footer) {
                        footer.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    ¡Contáctanos!
                  </Button>
                </Box>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Controles */}
      <Button
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255,255,255,0.7)',
          color: '#000',
          minWidth: '40px',
          height: '40px',
          borderRadius: '50%',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)',
          },
        }}
      >
        {'<'}
      </Button>
      <Button
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(255,255,255,0.7)',
          color: '#000',
          minWidth: '40px',
          height: '40px',
          borderRadius: '50%',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)',
          },
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
}
