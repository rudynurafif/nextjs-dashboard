'use client';

import { ColorModeContext, useMode } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function Home() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className=''>
          <main className='content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
