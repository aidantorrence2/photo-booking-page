import type { Metadata } from "next";
import { CharlotteFAQ } from "@/components/charlotte-faq"

export const metadata: Metadata = {
  title: 'Charlotte Photography | Professional Photoshoots with Aidan',
  description: 'Book a professional photography session in Charlotte, NC. Capture your moments with expert photographer Aidan Torrence. Outdoor and urban shoots available.',
  openGraph: {
    title: 'Charlotte Photography | Professional Photoshoots with Aidan',
    description: 'Book a professional photography session in Charlotte, NC. Capture your moments with expert photographer Aidan Torrence.',
    images: [
      {
        url: '/portfolio-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Charlotte Photography Sessions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlotte Photography | Professional Photoshoots with Aidan',
    description: 'Book a professional photography session in Charlotte, NC. Capture your moments with expert photographer Aidan Torrence.',
    images: ['/og-image.jpg'],
  },
}

export default function CharlotteFAQPage() {
  return <CharlotteFAQ />;
} 