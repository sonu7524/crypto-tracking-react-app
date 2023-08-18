import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

export default function SearchComponent() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#8a3ffc',
            }
        },
        });

  return (
    <ThemeProvider theme={theme}>
      <TextField fullWidth label="Search" id="search" sx={{
        margin: "20px",
        marginLeft: "50px",
        borderRadius: "50px",
        width: "90%",
        backgroundColor: "#1b1b1b",
        color: "#fff",
      }} />
    </ThemeProvider>
  );
}