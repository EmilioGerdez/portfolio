import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageSelector />
      <Box sx={{ overflowX: 'hidden' }}>
        <Hero />
        <Container maxWidth={false}>
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
