import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'استمارة التسجيل - دورة حفظ القرآن الكريم',
  description: 'استمارة التسجيل في الدورة الصيفية لحفظ القرآن الكريم - مسجد الإمام مالك بالإقامة الجامعية بوراوي عمار',
  keywords: 'قرآن, حفظ, مسجد, الإمام مالك, الإقامة الجامعية بوراوي عمار, الحراش',
  authors: [{ name: 'مسجد الإمام مالك' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover',
  themeColor: '#2E7D32',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'مسجد الإمام مالك',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'مسجد الإمام مالك',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
} 