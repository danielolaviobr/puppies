import React, {createContext, useCallback, useContext, useState} from 'react';
import {darkTheme, lightTheme} from '../styles/global';

interface ThemeContextData {
  mode: themeStyle;
  theme: ThemeProps;
  switchTheme(): void;
}

interface ThemeProps {
  container: object;
  button: object;
  title: object;
  icon: object;
  correct: object;
  incorrect: object;
}

enum themeStyle {
  dark,
  light,
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({children}) => {
  const [mode, setMode] = useState<themeStyle>(themeStyle.light);
  const [theme, setTheme] = useState(lightTheme);

  const switchTheme = useCallback(() => {
    if (mode === themeStyle.light) {
      setMode(themeStyle.dark);
      setTheme(darkTheme);
    } else {
      setMode(themeStyle.light);
      setTheme(lightTheme);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{mode, theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}
