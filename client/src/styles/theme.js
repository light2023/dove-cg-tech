import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF7F', // Green
    },
    secondary: {
      main: '#FFD700', // Yellow
    },
    background: {
      default: '#121212', // Black
      paper: '#1A1A1A', // Darker black
    },
    text: {
      primary: '#E0E0E0', // Light text
      secondary: '#AAAAAA', // Muted text
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

export default theme;
