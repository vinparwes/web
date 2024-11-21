import ParticleBackground from './components/background/ParticleBackground';
import { Box } from '@chakra-ui/react';
import AboutSection from './components/sections/About';
import ContactSection from './components/sections/Contact';
import ProjectsSection from './components/sections/Projects';
import NavBar from './components/elements/nav/NavBar';
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('about');
  const renderSection = () => {
    switch (section) {
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return <AboutSection />;
    }
  };
  return (
    <div className="App">
      <ParticleBackground />
        <NavBar setSection={setSection} />
        <Box>
          {renderSection()}
        </Box>
    </div>
  );
}

export default App;
