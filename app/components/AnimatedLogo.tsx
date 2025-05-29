import React from 'react';
import Image from 'next/image';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className || ''}`}>
      {/* The SVG itself might contain animations, or we apply CSS animations here */}
      {/* For this implementation, we'll use CSS for a subtle reveal */}
      <style jsx>{`
        .logo-reveal {
          animation: fadeInScaleUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          transform: scale(0.95);
        }
        @keyframes fadeInScaleUp {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <Image 
        src="/logo-animated.svg" 
        alt="hueneu animated logo"
        width={200} // Adjust width as needed, ensuring aspect ratio is maintained by height 'auto'
        height={100} // Adjust height, or use 'auto' if SVG has viewBox for intrinsic aspect ratio
        className="logo-reveal w-40 md:w-52 lg:w-64 h-auto"
        priority // Preload logo as it's in LCP for hero
      />
    </div>
  );
};

export default AnimatedLogo;
