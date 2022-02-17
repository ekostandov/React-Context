import React from 'react';

export const themes = {
  light: {
    color: '#282c34',
    background: '#ffffff',
  },
  dark: {
    color: '#ffffff',
    background: '#282c34',
  },
};

export const ThemeContext = React.createContext(themes.dark);
