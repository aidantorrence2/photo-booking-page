import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Professional Photoshoots with Aidan',
  description: 'Book a professional photography session. Capture your paradise moments with expert photographer Aidan Torrence. Beach, outdoor, and villa shoots available.',
  openGraph: {
    title: 'Professional Photoshoots with Aidan',
    description: 'Book a professional photography session. Capture your paradise moments with expert photographer Aidan Torrence.',
    images: [
      {
        url: '/portfolio-image.jpg', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Photography Sessions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Photoshoots with Aidan',
    description: 'Book a professional photography session. Capture your paradise moments with expert photographer Aidan Torrence.',
    images: ['/portfolio-image.jpg'], // Replace with your actual image path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type='text/javascript' dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '192f7a7c8e82119f5ab6477bd94d9b674252e014', { region: 'eu' });
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
