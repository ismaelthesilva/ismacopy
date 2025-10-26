'use client';

import { useEffect, useState } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import dynamic from 'next/dynamic';

// Dynamically import Navbar with no SSR
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

  // During SSR, render minimal content without navbar
  if (!isMounted) {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <div suppressHydrationWarning={true}>
            {children}
          </div>
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  // After hydration, render full app with navbar
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div suppressHydrationWarning={true}>
          <Navbar />
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
