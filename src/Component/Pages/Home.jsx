import React from 'react';
import Header from '../Layout/Header';
import About from '../Sections/About';
import BrandSection from '../Sections/BrandSection';
import FeaturesSection from '../Sections/FeaturesSection';
import HeroSection from '../Sections/HeroSection';

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <BrandSection />
        <About />
        <FeaturesSection />
        <h3 style={{marginTop:"200px"}}>Test</h3>
    </div>
  )
}

export default Home;