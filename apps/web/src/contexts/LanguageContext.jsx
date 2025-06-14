// apps/web/src/contexts/LanguageContext.jsx
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    dashboard: 'Dashboard',
    language: 'Language',
    theme: 'Theme'
  },
  pt: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    contact: 'Contato',
    dashboard: 'Painel',
    language: 'Idioma',
    theme: 'Tema'
  },
  es: {
    home: 'Inicio',
    about: 'Acerca',
    services: 'Servicios',
    contact: 'Contacto',
    dashboard: 'Panel',
    language: 'Idioma',
    theme: 'Tema'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};