"use client";

import React from 'react';
import { Palette, Box, Share2, BookOpen, Coffee, Wand2 } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="bg-primary-neutral p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center group transform hover:-translate-y-1">
    <div className="mb-4 text-accent-hue-1 group-hover:text-accent-hue-2 transition-colors duration-300">
      {React.cloneElement(icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
    </div>
    <h3 className="font-serif text-xl text-text-dark mb-2">{title}</h3>
    <p className="font-sans text-sm text-secondary-neutral italic">{description}</p>
  </div>
);

const services = [
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
    icon: <Share2 />,
    title: "Social Media",
    description: "Digital stories that connect and captivate."
  },
  {
    icon: <BookOpen />,
    title: "Stationery",
    description: "Tangible touches that leave a lasting impression."
  },
  {
    icon: <Coffee />,
    title: "Coffee Table Books",
    description: "Curating narratives for cherished collections."
  },
  {
    icon: <Wand2 />,
    title: "Creative Projects",
    description: "Bringing unique visions to vibrant life."
  }
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section id="services" className="section-container bg-secondary-neutral/10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="h2-style">What We Do</h2>
        <p className="p-style mt-2 max-w-2xl mx-auto">
          We pour our heart into projects big and small, always aiming for that perfect blend of beauty and meaning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
