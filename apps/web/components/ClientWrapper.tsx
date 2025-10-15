'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Skip contexts for error pages to prevent SSR issues
  const isErrorPage = pathname === '/404' || pathname === '/500' || !pathname;
  
  if (isErrorPage) {
    return (
      <div suppressHydrationWarning={true}>
        <div className={isMounted ? '' : 'invisible'}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div suppressHydrationWarning={true}>
          {isMounted && <Navbar />}
          <div className={isMounted ? '' : 'invisible'}>
            {children}
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
