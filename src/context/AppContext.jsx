import React, { createContext, useState, useEffect, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');
  const [role, setRole] = useState('user');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    lang,
    setLang,
    role,
    setRole
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
