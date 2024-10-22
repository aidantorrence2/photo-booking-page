import type { Metadata } from "next";
import { BaliFAQ } from "@/components/bali-faq"

export const metadata: Metadata = {
  title: 'Bali Photography | Professional Photoshoots with Aidan',
  description: 'Book a professional photography session in Bali. Capture your paradise moments with expert photographer Aidan Torrence. Beach, outdoor, and villa shoots available.',
  openGraph: {
    title: 'Bali Photography | Professional Photoshoots with Aidan',
    description: 'Book a professional photography session in Bali. Capture your paradise moments with expert photographer Aidan Torrence.',
    images: [
      {
        url: '/portfolio-image.jpg', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Bali Photography Sessions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Photography | Professional Photoshoots with Aidan',
    description: 'Book a professional photography session in Bali. Capture your paradise moments with expert photographer Aidan Torrence.',
    images: ['/og-image.jpg'], // Replace with your actual image path
  },
}

export default function BaliFAQPage() {
  return <BaliFAQ />;
}
