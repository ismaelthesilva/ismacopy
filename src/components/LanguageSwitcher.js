import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 15px;
  padding: 4px;
  border-radius: 20px;
  background: ${props => props.isPortuguese ? 'rgba(46, 204, 113, 0.1)' : 'rgba(26, 115, 232, 0.1)'};
  transition: background-color 0.3s ease;
`;

const Flag = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.3s ease;
  opacity: ${props => props.active ? '1' : '0.5'};
  transform: ${props => props.active ? 'scale(1.1)' : 'scale(1)'};
  box-shadow: ${props => props.active ? '0 0 8px rgba(255,255,255,0.3)' : 'none'};
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2ecc71;
    transition: all 0.3s ease;
    border-radius: 28px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: all 0.3s ease;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  input:checked + .slider {
    background-color: #1a73e8;
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectAndSetLanguage = () => {
      try {
        const systemLang = navigator.language || navigator.userLanguage;
        const langCode = systemLang.split('-')[0].toLowerCase();
        
        // Only change if the language is different from current
        if (langCode === 'pt' && i18n.language !== 'pt') {
          i18n.changeLanguage('pt');
        } else if (langCode !== 'pt' && i18n.language !== 'en') {
          i18n.changeLanguage('en');
        }
      } catch (error) {
        console.error('Error detecting language:', error);
        // Default to English if there's an error
        if (i18n.language !== 'en') {
          i18n.changeLanguage('en');
        }
      }
    };

    detectAndSetLanguage();
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isPortuguese = i18n.language === 'pt';

  return (
    <SwitchContainer isPortuguese={isPortuguese}>
      <Flag
        src="https://flagcdn.com/br.svg"
        alt="Brazil"
        active={isPortuguese}
      />
      <Switch>
        <input
          type="checkbox"
          checked={!isPortuguese}
          onChange={toggleLanguage}
        />
        <div className="slider"></div>
      </Switch>
      <Flag
        src="https://flagcdn.com/us.svg"
        alt="USA"
        active={!isPortuguese}
      />
    </SwitchContainer>
  );
};

export default LanguageSwitcher;