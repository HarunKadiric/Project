import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
    },
    secondary: {
      main: '#f48fb1', 
    },
    background: {
      default: '#121212', 
      paper: '#1e1e1e', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#b0bec5', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
