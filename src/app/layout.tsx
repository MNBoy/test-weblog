import { Navigation } from '@/components/common/Navigation';
import { ClientLayout } from '@/layouts/ClientLayout';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TenzuMusic Project',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx('min-h-dvh max-w-screen-sm mx-auto py-10 px-4')}>
        <Navigation />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
