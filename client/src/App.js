import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './context/authContext';
import store from './redux/store';
import theme from './styles/theme';
import AppRoutes from './routes';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
