'use client';

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Create wrapper components to handle dynamic imports properly
const ThemeProviderWrapper = dynamic(
  () => import("../contexts/ThemeContext").then(m => {
    const Provider = m.ThemeProvider;
    return { default: Provider as any };
  }),
  { ssr: false }
) as any;

const LanguageProviderWrapper = dynamic(
  () => import("../contexts/LanguageContext").then(m => {
    const Provider = m.LanguageProvider;
    return { default: Provider as any };
  }),
  { ssr: false }
) as any;

const Navbar = dynamic(
  () => import("../components/Navbar"),
  { ssr: false }
);

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR, render minimal content without any providers
  if (!isMounted) {
    return (
      <div suppressHydrationWarning={true}>
        {children}
      </div>
    );
  }

  // After hydration, render full app with contexts and navbar
  return (
    <ThemeProviderWrapper>
      <LanguageProviderWrapper>
        <div suppressHydrationWarning={true}>
          <Navbar />
          {children}
        </div>
      </LanguageProviderWrapper>
    </ThemeProviderWrapper>
  );
}
