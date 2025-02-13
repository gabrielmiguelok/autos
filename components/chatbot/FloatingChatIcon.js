/***************************************************************
 * File: /components/chatbot/FloatingChatIcon.js
 * Descripción:
 *  - Ícono flotante para abrir el chat, con burbuja y drag & drop.
 *  - Uso de framer-motion y react-spring para animaciones.
 * Principios aplicados:
 *  - SRP: Únicamente el ícono flotante, sin lógica del chat.
 *  - KISS: Comportamiento drag con un bubble message.
 ***************************************************************/

import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';

const ONE_CM_IN_PX = 37.8; // Aprox 1cm en px

export default function FloatingChatIcon({
  onClick,
  iconSize = 80,
  bubbleMessage = '¡Hola! ¿Necesitas ayuda?',
  initialX = null,
  initialY = null,
}) {
  const iconRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [iconRect, setIconRect] = useState({ width: 0, height: 0 });

  // Control de arrastre con react-spring
  const [style, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Mostrar / ocultar ícono
  const [isHidden, setIsHidden] = useState(false);
  // Selección (para mostrar "x" en la burbuja)
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Posición inicial en la parte inferior derecha
  useEffect(() => {
    requestAnimationFrame(() => {
      if (iconRef.current) {
        const rect = iconRef.current.getBoundingClientRect();
        setIconRect({ width: rect.width, height: rect.height });

        const posX =
          initialX !== null
            ? initialX
            : window.innerWidth - rect.width - ONE_CM_IN_PX;

        const isMobile = window.innerWidth <= 768;
        const offsetY = isMobile ? 2 * ONE_CM_IN_PX : ONE_CM_IN_PX;

        const posY =
          initialY !== null
            ? initialY
            : window.innerHeight - rect.height - offsetY;

        api.start({ x: posX, y: posY });
      }
    });
  }, [api, initialX, initialY]);

  // Deseleccionar al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (isSelected && iconRef.current && !iconRef.current.contains(e.target)) {
        setIsSelected(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isSelected]);

  // Config de arrastre
  const bind = useDrag(
    ({ offset: [ox, oy], first }) => {
      if (first) {
        setIsSelected(true);
      }

      const { width, height } = windowSize;
      const { width: iw, height: ih } = iconRect;

      if (iw === 0 || ih === 0) {
        api.start({ x: ox, y: oy });
        return;
      }

      const clampedX = Math.min(Math.max(ox, 0), width - iw);
      const clampedY = Math.min(Math.max(oy, 0), height - ih);

      api.start({ x: clampedX, y: clampedY });
    },
    {
      from: () => [style.x.get(), style.y.get()],
      filterTaps: false,
    }
  );

  if (isHidden) {
    return null;
  }

  return (
    <animated.div
      ref={iconRef}
      {...bind()}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: style.x,
        y: style.y,
        zIndex: 9999,
        userSelect: 'none',
        touchAction: 'none',
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
      }}
    >
      <AnimatePresence>
        {bubbleMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, width: 150 }}
            animate={{
              opacity: 1,
              y: 0,
              width: isSelected ? 180 : 150,
            }}
            exit={{ opacity: 0, width: 150 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              marginBottom: 8,
              padding: '8px 16px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              fontSize: '0.9rem',
              color: '#333',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              position: 'relative',
              cursor: 'default',
              overflow: 'hidden',
            }}
          >
            {bubbleMessage}

            {/* Flechita de la burbuja */}
            <Box
              component="span"
              sx={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #f5f5f5',
              }}
            />

            {/* Botón x si está seleccionado */}
            {isSelected && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '8px',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#ccc',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                }}
                onClick={() => setIsHidden(true)}
              >
                x
              </Box>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Círculo flotante (ícono chat) */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.9,
        }}
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: '50%',
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
        onClick={onClick}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="Chat Logo"
          sx={{
            width: iconSize * 0.6,
            height: iconSize * 0.6,
            objectFit: 'contain',
          }}
        />
      </motion.div>
    </animated.div>
  );
}
