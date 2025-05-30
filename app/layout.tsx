import type { Metadata } from 'next';
import { Outfit, DM_Serif_Display } from 'next/font/google'; // Import DM_Serif_Display
import './globals.css';
import Footer from './components/Footer'; // Import the Footer component

// Configure the Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit', // CSS variable for Outfit
  weight: ['300', '400', '500', '600', '700'], // Include relevant weights
});

// Configure the DM Serif Display font
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display',
  weight: ['400'], // DM Serif Display typically comes in 400 weight
});

export const metadata: Metadata = {
  title: 'hueneu | Where stories find their aesthetic.',
  description: 'hueneu is a graphic design studio creating designs that whisper loud stories. We specialize in branding, packaging, social media, stationery, coffee table books, and creative projects.',
  keywords: 'hueneu, graphic design, branding, packaging, social media, stationery, coffee table books, creative projects, design studio, story-first design, intentional design, evocative design',
  authors: [{ name: 'hueneu' }],
  openGraph: {
    title: 'hueneu | Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories. Explore our world of intentional, evocative design.',
    url: 'https://hueneu.com', // Replace with actual domain later
    siteName: 'hueneu',
    // images: [ // Add a hero image or logo for social sharing later
    //   {
    //     url: 'https://hueneu.com/og-image.png', 
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hueneu | Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories. Explore our world of intentional, evocative design.',
    // site: '@hueneu_', // Replace with actual Twitter handle
    // creator: '@hueneu_',
    // images: ['https://hueneu.com/twitter-image.png'], // Replace with actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // manifest: '/site.webmanifest', // Add manifest later if PWA features are desired
  // themeColor: '#F5F0EA', // From Tailwind config - primary-neutral
  // icons: { // Add favicons later
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerifDisplay.variable} scroll-smooth`}>
      <body className="bg-primary-neutral text-text-dark antialiased font-primary flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
        <Footer /> 
      </body>
    </html>
  );
}
