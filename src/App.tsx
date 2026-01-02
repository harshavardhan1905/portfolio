import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/animations.css';

function App() {
  // Update page title
  useEffect(() => {
    document.title = 'Harshavardhan Podeti | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ProjectSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
