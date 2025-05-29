import HeroSection from './components/HeroSection';
import HueneuStorySection from './components/HueneuStorySection';
import WhatWeDoSection from './components/WhatWeDoSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import ContactFormSection from './components/ContactFormSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      {/* Hero Section: Animated logo reveal, tagline, subtext, scroll indicator */}
      <HeroSection />

      {/* The hueneu Story: Meaning, balance, "Who Knew?" moment */}
      <HueneuStorySection />

      {/* What We Do: Core offerings with icons/visuals and microcopy */}
      <WhatWeDoSection />

      {/* Why hueneu?: Emotional brand pitch */}
      <WhyHueneuSection />

      {/* Let's Work Together: Contact form, CTA, Instagram link */}
      <ContactFormSection />
    </main>
  );
}
