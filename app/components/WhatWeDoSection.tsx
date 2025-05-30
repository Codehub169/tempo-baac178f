'use client';

import React from 'react';
// Image import removed as it's no longer used in this file after the change
import { Palette, Box } from 'lucide-react'; // Removed unused icons: Share2, BookOpen, Coffee, Wand2

interface ServiceItemProps {
  icon?: React.ReactNode; // For Lucide icons
  iconSrc?: string;       // For image paths (SVG)
  iconAlt?: string;       // Alt text for images
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, iconSrc, iconAlt, title, description }) => (
  <div class="bg-primary-neutral p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center group transform hover:-translate-y-1">
    <div class="mb-4 w-10 h-10 flex items-center justify-center">
      {icon && (
        // Lucide icons continue to use text color for their stroke
        <div class="text-accent-hue-1 group-hover:text-accent-hue-2 transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
        </div>
      )}
      {iconSrc && (
        // SVGs from src will use the mask technique for color change
        <div
          class="w-full h-full bg-accent-hue-1 group-hover:bg-accent-hue-2 transition-colors duration-300"
          style={{
            maskImage: `url(${iconSrc})`,
            WebkitMaskImage: `url(${iconSrc})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
          role="img" // Accessibility: treat this div as an image
          aria-label={iconAlt || title} // Provide accessible name
        />
      )}
    </div>
    <h3 class="font-serif text-xl text-text-dark mb-2">{title}</h3>
    <p class="font-sans text-sm text-secondary-neutral italic">{description}</p>
  </div>
);

const services: ServiceItemProps[] = [
  {
    icon: <Palette />,
    title: "Branding",
    description: "Crafting identities that resonate and endure."
  },
  {
    icon: <Box />,
    title: "Packaging",
    description: "Packaging, but make it poetic."
  },
  {
    iconSrc: "/icons/social-media.svg",
    iconAlt: "Social Media Icon",
    title: "Social Media",
    description: "Digital stories that connect and captivate."
  },
  {
    iconSrc: "/icons/stationery.svg",
    iconAlt: "Stationery Icon",
    title: "Stationery",
    description: "Tangible touches that leave a lasting impression."
  },
  {
    iconSrc: "/icons/coffee-table-books.svg",
    iconAlt: "Coffee Table Books Icon",
    title: "Coffee Table Books",
    description: "Curating narratives for cherished collections."
  },
  {
    iconSrc: "/icons/creative-projects.svg",
    iconAlt: "Creative Projects Icon",
    title: "Creative Projects",
    description: "Bringing unique visions to vibrant life."
  }
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="services" class="section-container bg-secondary-neutral/10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="h2-style">What We Do</h2>
        <p class="p-style mt-2 max-w-2xl mx-auto">
          We pour our heart into projects big and small, always aiming for that perfect blend of beauty and meaning.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((service) => (
          <ServiceItem 
            key={service.title} // Using title as key, assuming titles are unique and stable
            icon={service.icon} 
            iconSrc={service.iconSrc} 
            iconAlt={service.iconAlt}
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
