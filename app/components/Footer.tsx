import React from 'react';
import { Instagram, ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-neutral/20 text-text-dark py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-secondary-neutral">
              &copy; {new Date().getFullYear()} hueneu. All rights reserved.
            </p>
            <p className="text-xs text-secondary-neutral/80 mt-1">
              Designs that whisper loud stories.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/hueneu_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="hueneu on Instagram"
              className="text-secondary-neutral hover:text-accent-hue-1 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="text-secondary-neutral hover:text-accent-hue-1 transition-colors duration-300 focus:outline-none"
              type="button"
            >
              <ArrowUpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
