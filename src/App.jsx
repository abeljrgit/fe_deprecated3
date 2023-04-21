import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Routing from './presentation/routes/Routing';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  primary: {
    main: '#DAF5FF',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
