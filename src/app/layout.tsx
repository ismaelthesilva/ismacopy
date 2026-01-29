import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "../components/ClientWrapper";
import "./globals.css";
import type { Metadata } from 'next'

// This is where you update SEO info, favicon, title, etc.
export const metadata: Metadata = {
  title: 'ismaCopy - Digital Solutions Expert',
  description: 'Fullstack development and conversion copywriting services. From motivational speaker to digital expert.',
  keywords: ['web development', 'copywriting', 'digital marketing', 'Next.js', 'React'],
  authors: [{ name: 'Ismael Silva' }],
  
  // Favicon and icons
  icons: {
    icon: '/ismacopyfavicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/ismacopyfavicon.ico',
  },
  
  // Open Graph (social media sharing)
  openGraph: {
    title: 'ismaCopy - Digital Solutions Expert',
    description: 'Fullstack development and conversion copywriting services',
    url: 'https://ismaelsilva.com',
    siteName: 'ismaCopy',
    images: [
      {
        url: '/ismacopyLogo.png',
        width: 1200,
        height: 630,
        alt: 'ismaCopy - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ismaCopy - Digital Solutions Expert',
    description: 'Fullstack development and conversion copywriting services',
    images: ['/og-image.png'],
  },
  
  // Meta tags
  robots: 'index, follow',
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' }
  ],
  colorScheme: 'light dark',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="transition-colors duration-300" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-transition bg-background text-foreground`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
