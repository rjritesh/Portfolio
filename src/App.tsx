import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import StarField from './components/StarField';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { Suspense } from 'react';

const Projects = React.lazy(() => import('./components/Projects'));

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-space-950 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Starfield Background */}
        <div className="dark:block hidden">
          <StarField />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Suspense fallback={<div className="text-center py-10">Loading Projects...</div>}>
              <Projects />
            </Suspense>
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;