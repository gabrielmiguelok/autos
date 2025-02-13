/**
 * =========================================================
 * File: /components/landing/HeroSection.js
 * Descripción: Hero principal con slides e integración
 * de preloader. Agrega un “efecto rayo” al cargar.
 * Principios aplicados:
 * - SRP: Mostrar Hero + Lógica de slides.
 * - OCP: Fácil de extender con más slides.
 * - DIP: Los datos (slidesData) desacoplados de la lógica.
 * =========================================================
 */

'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Preloader from './Preloader'; // Importamos el nuevo preloader

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

// Efecto rayo (flash) al montar el Hero
const flashVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  if (isLoading) {
    return <Preloader onFinish={handleLoadingFinish} />;
  }

  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Efecto rayo */}
      <motion.div
        variants={flashVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#fff',
          zIndex: 9999,
        }}
      />

      <AnimatePresence mode="wait">
        {slidesData.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 200, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.95 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
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
                {/* Overlay semitransparente */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}
                />
                {/* Contenido */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '800px',
                    textAlign: 'center',
                    padding: '1rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                      textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Typewriter */}
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
                      textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                    }}
                  >
                    {slide.subtitle}
                  </Typography>

                  <Button
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'bold',
                      px: 5,
                      py: 1.8,
                      background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      borderRadius: '50px',
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 0.9,
                        background: `linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%)`,
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

      {/* Flecha Izquierda */}
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          transition: 'transform 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
            transform: 'scale(1.1) translateY(-50%)',
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Flecha Derecha */}
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          transition: 'transform 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
            transform: 'scale(1.1) translateY(-50%)',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
