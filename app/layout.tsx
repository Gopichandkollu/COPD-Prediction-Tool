import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from 'components/navbar'; // Corrected import statement

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'COPD Prediction Tool',
  description: 'A professional tool for predicting COPD severity and risk factors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
