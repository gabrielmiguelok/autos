'use client';

import React from 'react';

// Import de nuestros componentes
import NavigationBar from '../components/landing/NavigationBar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import SolutionsSection from '../components/landing/SolutionsSection';
import OurTeamSection from '../components/landing/OurTeamSection';
import FaqSection from '../components/landing/FaqSection';
import FooterSection from '../components/landing/FooterSection';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main>
        {/* Hero con 3 slides y estilo corporativo */}
        <HeroSection />

        {/* Quiénes somos */}
        <AboutSection />

        {/* Soluciones y servicios corporativos */}
        <SolutionsSection />

        {/* Nuestro equipo */}
        <OurTeamSection />

        {/* Preguntas frecuentes */}
        <FaqSection />

        {/* Footer (contacto y más) */}
        <FooterSection />
      </main>
    </>
  );
}
