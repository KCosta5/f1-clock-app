import { useState } from 'react'
import ClockCard from './components/ClockCard'
import F1NextRaceCard from './components/F1NextRaceCard'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column',
      position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '0 auto',
  overflow: 'hidden',
  width: '100%'
      }}>
<ClockCard />
<F1NextRaceCard />
      </div>
    </ThemeProvider>
  )
}

export default App
