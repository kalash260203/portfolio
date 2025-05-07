import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundDots from './components/BackgroundDots';

function App() {
  // Initialize scroll animations with throttling for better performance
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;

      isScrolling = true;

      // Use requestAnimationFrame for better performance
      window.requestAnimationFrame(() => {
        const sections = document.querySelectorAll('.section-wrapper');

        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.85) {
            section.classList.add('animate-in');
          }
        });

        isScrolling = false;
      });
    };

    // Initial check
    setTimeout(handleScroll, 100);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">

      <BackgroundDots />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
