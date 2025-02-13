/**
 * =========================================================
 * File: /app/(ruta)/page.js o /pages/index.js
 * Descripción: Página principal que reúne todas las secciones.
 * Principios aplicados:
 * - SoC: Cada sección es un componente separado.
 * - SSOT: Define el orden único de secciones.
 * - Bajo acoplamiento: Cada sección se importa sin dependencias cruzadas.
 * =========================================================
 */

'use client';

import React from 'react';

// Import de nuestros componentes
import NavigationBar from '../components/landing/NavigationBar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import SolutionsSection from '../components/landing/SolutionsSection';
import ServicesSection from '../components/landing/ServicesSection';
import OurTeamSection from '../components/landing/OurTeamSection';
import FaqSection from '../components/landing/FaqSection';
import FooterSection from '../components/landing/FooterSection';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ServicesSection />
        <OurTeamSection />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
