import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material';
import './style.css';

export default function ToggleComponent({alignment, setAlignment}) {

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = createTheme({
    palette: {
        primary: {
            main: '#8a3ffc',
        }
    },
    });

  return (
    <div className='toggle-btn'>
        <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
      <ToggleButton sx={{color:"var(--grey)", border:"1px solid var(--grey)"}} value="current_price">PRICE</ToggleButton>
      <ToggleButton sx={{color:"var(--grey)", border:"1px solid var(--grey)"}} value="market_cap">MKT CAP</ToggleButton>
      <ToggleButton sx={{color:"var(--grey)", border:"1px solid var(--grey)"}} value="total_volume">VOLUME</ToggleButton>
    </ToggleButtonGroup>
    </ThemeProvider>
    </div>
  );
}