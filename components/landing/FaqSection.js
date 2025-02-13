/**
 * =========================================================
 * File: /components/landing/FaqSection.js
 * Descripción: Sección de preguntas frecuentes con acordeones
 * y animaciones en la aparición de cada uno.
 * Principios aplicados:
 * - SRP: Exclusivo para mostrar el listado de FAQs.
 * - DRY: Reutiliza el componente Accordion de MUI.
 * - Fail Fast & Gestión de excepciones: No hay lógicas complejas,
 *   pero se podría integrar validación si la data viniera de un API.
 * =========================================================
 */

'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

export default function FaqSection() {
  const faqs = [
    {
      question: '¿Ofrecen consultoría para flotillas de vehículos eléctricos?',
      answer:
        'Sí, contamos con especialistas para asesorarte en la adopción de flotas más eficientes y sostenibles.',
    },
    {
      question: '¿Puedo financiar mi compra a largo plazo?',
      answer:
        'Tenemos diversas opciones de financiamiento que se adaptan a tus requerimientos de plazo y presupuesto.',
    },
    {
      question: '¿Cuál es el tiempo de entrega de los vehículos?',
      answer:
        'Depende de la disponibilidad de stock y las configuraciones solicitadas. Te mantendremos informado en cada paso.',
    },
  ];

  return (
    <Box
      component="section"
      id="faq-section"
      sx={{
        py: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-bg-default)',
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
          Preguntas Frecuentes
        </Typography>
      </motion.div>

      <Box sx={{ maxWidth: '800px', margin: '0 auto', px: 2 }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion
              sx={{
                mb: 'var(--spacing-sm)',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                borderRadius: 0,
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-primary)' }} />}
              >
                <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
