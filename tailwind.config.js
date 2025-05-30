/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-neutral': '#F5F0EA',       // Soft off-white/light beige
        'secondary-neutral': '#A8A39D',     // Muted grey/taupe
        'accent-hue-1': '#FF6B6B',          // Vibrant Coral/Red
        'accent-hue-2': '#4ECDC4',          // Teal/Aqua
        'accent-hue-3': '#474787',          // Deep Indigo
        'text-dark': '#333333',             // Dark text/elements
        // States defined in design system
        'success': '#4CAF50',
        'warning': '#FFC107',
        'error': '#F44336',
      },
      fontFamily: {
        primary: ['var(--font-outfit)', 'sans-serif'], // Use CSS variable for Outfit
        secondary: ['var(--font-dm-serif-display)', 'serif'], // Use CSS variable for DM Serif Display
      },
      // Custom animations and keyframes can be added here later
      // e.g., for the logo reveal or "Who Knew?" moment
      animation: {
        // Example: 'reveal': 'revealAnimation 1s ease-in-out forwards',
      },
      keyframes: {
        // Example:
        // revealAnimation: {
        //   '0%': { opacity: '0', transform: 'translateY(20px)' },
        //   '100%': { opacity: '1', transform: 'translateY(0)' },
        // },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'), // Can be added if extensive markdown/prose styling is needed
  ],
};
