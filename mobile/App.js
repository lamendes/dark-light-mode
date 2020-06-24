import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';

import themes from './src/themes';

import Home from './src/Home';

export default function App() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.light;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
