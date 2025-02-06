import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { info } from '@/lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${info.name} - Full Stack Developer`,
  description: info.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark scroll-smooth'>
      <body className={`${inter.className}`}>
          {children}
      </body>
    </html>
  );
}