import React, { FunctionComponent, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components/native';

import { theme } from './types';

const Theme: FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useTheme = () => useContext(ThemeContext);

export default Theme;
