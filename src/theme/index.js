import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import palette from './palette';

// ----------------------------------------------------------------------

const ThemeConfig = ({ children }) => {

  // Define theme options, such as the color palette.
  const themeOptions = {
    palette: palette['light'],
  };

  // Create the Material-UI theme object with the specified options.
  const theme = createTheme(themeOptions);

  return (
    // Apply the theme using ThemeProvider, ensuring all child components have access to it.
    <ThemeProvider theme={theme}>
      {/* CssBaseline is used to reset/normalize CSS for consistent styling */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeConfig;
