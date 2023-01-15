import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens } from './theme/theme';

import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Discover from './components/Discover'
import { Box, Stack } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [mode, setMode] = React.useState("light");

  let theme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode)),
    [mode]
  ));

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />

        <Stack direction="row">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Discover />
        </Stack>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
