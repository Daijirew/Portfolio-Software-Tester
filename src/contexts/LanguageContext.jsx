import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { th } from '../locales/th';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const translations = language === 'en' ? en : th;

    const t = (key) => {
        const keys = key.split('.');
        let value = translations;
        for (let k of keys) {
            value = value[k];
            if (!value) return key;
        }
        return value;
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'th' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
