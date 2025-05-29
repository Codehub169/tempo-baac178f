"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image'; // Import Next Image

const HueneuStorySection: React.FC = () => {
  // State for the "Who Knew?" moment, to be triggered by scroll later
  // const [isWhoKnewVisible, setIsWhoKnewVisible] = React.useState(false);
  // TODO: Implement scroll-triggered animation for the "Who Knew?" element

  return (
    <section id="story" className="section-container bg-primary-neutral">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="h2-style mb-8">
          The <span className="text-accent-hue-1">Hue</span> of Creativity, the <span className="text-accent-hue-2">Neu</span> of Calm.
        </h2>
        <p className="p-style mb-6">
          Hueneu is born from a belief in balance. 'Hue' represents the vibrant bursts of creative energy, the unexpected palettes, the bold ideas that make a story sing. 'Neu' is its grounding counterpart – the intentional whitespace, the quiet confidence of neutrality, the calm that allows true essence to emerge.
        </p>
        <p className="p-style mb-12">
          We weave these together, crafting designs that are not just seen, but felt. Designs that carry a whisper of nostalgia, a hint of mystery, and a whole lot of heart.
        </p>

        {/* Placeholder Image */}
        <div className="my-12 md:my-16 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://picsum.photos/seed/hueneu-story/800/450" // Replace with your actual image
            alt="Evocative image representing balance and creativity"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority // Consider adding priority if this image is above the fold or critical for UX
          />
        </div>
        <p className="text-xs text-secondary-neutral mb-12">Image placeholder: Replace with a relevant photo.</p>

        {/* "Who Knew?" Moment - Placeholder for scroll-triggered visual pop-out */}
        <div 
          className={`who-knew-element p-8 md:p-12 rounded-lg shadow-xl transition-all duration-700 ease-in-out transform scale-95 opacity-0 hover:scale-100 hover:opacity-100 focus-within:scale-100 focus-within:opacity-100 bg-gradient-to-br from-accent-hue-3 to-purple-600 my-16 mx-auto max-w-xl cursor-pointer group`}
          // Placeholder: Add class like 'animate-fadeInUp' when scroll-triggered logic is added
          // For now, interaction is on hover/focus for demo
          tabIndex={0} // Make div focusable for accessibility if it's interactive
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles size={48} className="text-yellow-300 group-hover:animate-ping" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-primary-neutral mb-3 text-center">
            Who Knew?
          </h3>
          <p className="font-sans text-lg text-indigo-100 text-center">
            That such quiet designs could hold such vibrant surprises. This is where the magic happens – the unexpected twist, the delightful detail, the moment that makes you smile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HueneuStorySection;
