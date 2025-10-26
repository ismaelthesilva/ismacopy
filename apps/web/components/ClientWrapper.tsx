'use client';

import { useEffect, useState } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render providers always, but conditionally render Navbar
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div suppressHydrationWarning={true}>
          {isMounted && <Navbar />}
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
