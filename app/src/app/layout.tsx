import { config as FontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/app.sass';

import { FrontFooter, FrontNavbar } from '@/components/app';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='has-navbar-fixed-top'
    >
      <body className={inter.className}>
        <FrontNavbar />
        {children}
        <FrontFooter />
      </body>
    </html>
  );
}
