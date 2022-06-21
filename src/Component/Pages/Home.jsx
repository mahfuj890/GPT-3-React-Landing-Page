import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import About from '../Sections/About';
import BlogSection from '../Sections/BlogSection';
import BrandSection from '../Sections/BrandSection';
import CTASection from '../Sections/CTASection';
import FeaturesSection from '../Sections/FeaturesSection';
import HeroSection from '../Sections/HeroSection';
import PossibilitySection from '../Sections/PossibilitySection';

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <BrandSection />
        <About />
        <FeaturesSection />
        <PossibilitySection />
        <CTASection />
        <BlogSection />
        <Footer />
     
    </div>
  )
}

export default Home;