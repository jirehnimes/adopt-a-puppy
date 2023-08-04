import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'animate.css';
import '@/styles/app.sass';

FontAwesomeConfig.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adopt A Puppy',
  description: 'Your furry friends need you.',
  icons: [
    {
      rel: 'shortcut icon',
      href: 'favicon.png',
      url: '/public/favicon.png',
      type: 'image/x-icon',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
