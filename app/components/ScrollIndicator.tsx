import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
  targetId?: string; // Optional: ID of the section to scroll to
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className, targetId }) => {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // Fallback or alternative scroll logic can be added here if needed
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`group absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full hover:bg-secondary-neutral/10 transition-colors duration-300 ${className || ''}`}
    >
      <ArrowDown 
        className="w-6 h-6 md:w-8 md:h-8 text-secondary-neutral group-hover:text-text-dark animate-bounce transition-colors duration-300"
        style={{ animationDuration: '1.5s' }} // Customize bounce speed
      />
    </button>
  );
};

export default ScrollIndicator;
