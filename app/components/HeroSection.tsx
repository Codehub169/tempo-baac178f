"use client";

import React from 'react';
// Placeholder for AnimatedLogo component
// import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator'; // Import the actual ScrollIndicator

const AnimatedLogoPlaceholder = () => (
  <div className="w-48 h-48 md:w-64 md:h-64 bg-secondary-neutral bg-opacity-20 rounded-full flex items-center justify-center text-center p-4">
    <span className="font-serif text-3xl md:text-4xl text-accent-hue-3">hueneu</span>
    {/* This is a placeholder. The actual AnimatedLogo component will have the SVG animation */}
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center p-6 bg-gradient-to-br from-primary-neutral via-primary-neutral to-secondary-neutral/10"
    >
      {/* Animated Logo Placeholder */}
      {/* <AnimatedLogo /> Replace with actual component when available */}
      <AnimatedLogoPlaceholder />

      {/* Tagline */}
      <h1 className="h1-style mt-12 mb-4 max-w-2xl">
        Where stories find their aesthetic.
      </h1>

      {/* Subtext */}
      <p className="p-style-emphasis text-lg md:text-xl max-w-md mb-20">
        Designs that whisper loud stories.
      </p>

      {/* Scroll Down Indicator - Now functional */}
      <ScrollIndicator targetId="story" />
    </section>
  );
};

export default HeroSection;
