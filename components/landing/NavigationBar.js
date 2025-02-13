'use client';

import React, { useState } from 'react';
import { Box, IconButton, Link, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarContainer = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1100,
  width: '100%',
  // Ajustamos altura y quitamos fondo sólido
  height: '80px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  boxShadow: 'none',
}));

const LinksContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#fff', // Ahora en blanco para mayor contraste
  fontWeight: 600,
  fontSize: '1.2rem',
  position: 'relative',
  transition: 'color var(--transition-fast), transform var(--transition-fast)',
  '&:hover': {
    color: 'var(--color-secondary)',
    transform: 'translateX(4px)',
  },
}));

const BurgerMenuContainer = styled(Box)(() => ({
  display: 'none',
  '@media (max-width: 900px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));

const MobileMenuOverlay = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  justifyContent: 'flex-end',
  zIndex: 1200,
}));

const MobileMenuContainer = styled(Box)(() => ({
  width: '70%',
  maxWidth: '300px',
  height: '100%',
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
}));

const MobileNavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'var(--color-text-primary)',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '1.5rem',
  transition: 'color var(--transition-fast), transform var(--transition-fast)',
  '&:hover': {
    color: 'var(--color-secondary)',
    transform: 'translateX(4px)',
  },
}));

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Inicio', href: '#hero-section' },
    { label: 'Nosotros', href: '#about-section' },
    { label: 'Soluciones', href: '#solutions-section' },
    { label: 'Equipo', href: '#our-team-section' },
    { label: 'FAQ', href: '#faq-section' },
    { label: 'Contacto', href: '#footer-section' },
  ];

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: '#fff', // Logo en blanco
          fontSize: '1.8rem',
        }}
      >
        <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          AutoCorp
        </Link>
      </Typography>

      <LinksContainer>
        {navItems.map((item, index) => (
          <NavLink key={index} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </LinksContainer>

      <BurgerMenuContainer>
        <IconButton onClick={toggleMenu} sx={{ color: '#fff' }}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </BurgerMenuContainer>

      {isMobile && mobileMenuOpen && (
        <MobileMenuOverlay onClick={toggleMenu}>
          <MobileMenuContainer onClick={(e) => e.stopPropagation()}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={toggleMenu}>
                <CloseIcon />
              </IconButton>
            </Box>
            {navItems.map((item, index) => (
              <MobileNavLink key={index} href={item.href} onClick={toggleMenu}>
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenuContainer>
        </MobileMenuOverlay>
      )}
    </NavbarContainer>
  );
}
