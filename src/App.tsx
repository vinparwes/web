import ParticleBackground from './components/background/ParticleBackground';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutSection from './components/sections/About';
import ContactSection from './components/sections/Contact';
import ProjectsSection from './components/sections/Projects';
import NavBar from './components/elements/nav/NavBar';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Router >
        <NavBar />
        <Box>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path='/about' element={<AboutSection />}></Route>
            <Route path='/contact' element={<ContactSection />}></Route>
            <Route path='/projects' element={<ProjectsSection />}></Route>
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
