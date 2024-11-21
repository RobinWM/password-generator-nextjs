import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Secure Password Generator | Create Strong Passwords Instantly',
  description: 'Generate secure, customizable passwords with our advanced password generator. Create strong passwords with options for length, uppercase, numbers, and special characters.',
  keywords: 'password generator, secure password, strong password, random password, password security',
  openGraph: {
    title: 'Secure Password Generator | Create Strong Passwords Instantly',
    description: 'Generate secure, customizable passwords with our advanced password generator.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}