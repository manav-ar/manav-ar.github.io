import './globals.css';
import type { Metadata } from 'next';

const SITE = 'https://manav-ar.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Manav Arora · Data Scientist',
  description:
    'LLM evaluation, reinforcement learning and multimodal retrieval. Two years of production ML at PwC. MS Data Science, Georgetown.',
  openGraph: {
    title: 'Manav Arora · Data Scientist',
    description: "I build systems that know when they're wrong.",
    url: SITE,
    siteName: 'Manav Arora',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Manav Arora, data scientist' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manav Arora · Data Scientist',
    description: "I build systems that know when they're wrong.",
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
