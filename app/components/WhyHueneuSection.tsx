import React from 'react';
import { Sparkles } from 'lucide-react';

const WhyHueneuSection: React.FC = () => {
  return (
    <section id="why-hueneu" className="section-container bg-primary-neutral text-text-dark py-20 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        {/* Section Title with a touch of serif for elegance */}
        <h2 className="h2-style font-serif text-accent-hue-3 mb-12">
          Why hueneu?
        </h2>

        {/* Poetic Brand Pitch */}
        <p className="p-style-emphasis text-2xl md:text-3xl mb-8 leading-relaxed text-gray-700">
          We don’t just design—<span className="text-accent-hue-1">we decode stories</span>.
        </p>
        
        <p className="p-style text-lg md:text-xl mb-8 leading-relaxed text-gray-600">
          In a world that often shouts, we believe in the power of the whisper. Designs that speak quietly but resonate deeply, lingering in thought and feeling long after they're seen. At hueneu, we unearth the essence of your narrative and translate it into visuals that are not only beautiful but meaningful.
        </p>

        <p className="p-style text-lg md:text-xl mb-12 leading-relaxed text-gray-600">
          We embrace the calm, dance with mystery, and strive for that perfect balance—where vibrant creativity meets grounding intention. It's about creating an experience, a connection, a quiet confidence that your story is being told authentically and with soul.
        </p>

        {/* A subtle visual element or quote */}
        <div className="flex justify-center items-center mt-12">
          <Sparkles className="w-8 h-8 text-accent-hue-2 mr-3" />
          <p className="p-style-emphasis text-xl text-accent-hue-3">
            Designs that stay with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
