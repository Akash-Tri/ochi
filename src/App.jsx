import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.main-container'),
      smooth: true,
    });

    return () => {
      // Clean up locomotive scroll instance on unmount
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full min-h-screen text-black'>
      <div className="main-container overflow-hidden">
        {/* Navbar */}
        <Navbar />
        {/* LandingPage */}
        <LandingPage />
        {/* Marque */}
        <Marque />
        {/* About */}
        <About />
        {/* Eyes */}
        <Eyes />
        {/* Featured */}
        <Featured />
        {/* Cards */}
        <Cards />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
