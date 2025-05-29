"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
  targetId?: string; // Optional: ID of the section to scroll to
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className, targetId }) => {
  const handleClick = () => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`ScrollIndicator: Target element with ID "${targetId}" not found.`);
      }
    } else {
      // Optionally, provide a default scroll behavior if no targetId is specified,
      // e.g., scroll by a certain amount, or log a warning if a targetId is expected.
      // console.warn("ScrollIndicator: targetId prop not provided.");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={targetId ? `Scroll to ${targetId} section` : "Scroll to next section"}
      className={`group absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full hover:bg-secondary-neutral/10 focus:outline-none focus:ring-2 focus:ring-secondary-neutral/30 transition-all duration-300 ${className || ''}`}
      type="button" // Explicitly set type to button for non-form buttons
    >
      <ArrowDown 
        className="w-6 h-6 md:w-8 md:h-8 text-secondary-neutral group-hover:text-text-dark animate-bounce transition-colors duration-300"
        style={{ animationDuration: '1.5s' }} // Customize bounce speed
        aria-hidden="true" // Icon is decorative as button has aria-label
      />
    </button>
  );
};

export default ScrollIndicator;
