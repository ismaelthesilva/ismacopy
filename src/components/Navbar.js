import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          <span className="belt-white">Isma</span> <span className="belt-blue">Copy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">{t('nav.home')}</Nav.Link>
            {/*<Nav.Link as={Link} to="/techniques" className="nav-link-custom">{t('nav.techniques')}</Nav.Link>
            <Nav.Link as={Link} to="/performance" className="nav-link-custom">{t('nav.performance')}</Nav.Link>
            <Nav.Link as={Link} to="/diet" className="nav-link-custom">{t('nav.diet')}</Nav.Link>
            <Nav.Link as={Link} to="/rankings" className="nav-link-custom">{t('nav.rankings')}</Nav.Link>*/}
            <Nav.Link as="a" href="mailto:hi@ismaelsilva.com" className="nav-link-custom">{t('nav.contact')}</Nav.Link>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
