'use client';

import { useEffect, useState } from "react";

// Dynamically import heavy components to avoid SSR issues
let LanguageProvider: any = null;
let ThemeProvider: any = null;
let Navbar: any = null;

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Load components dynamically after mount
    Promise.all([
      import("../contexts/LanguageContext").then(m => m.LanguageProvider),
      import("../contexts/ThemeContext").then(m => m.ThemeProvider),
      import("../components/Navbar").then(m => m.default)
    ]).then(([LangProvider, Theme, NavComponent]) => {
      LanguageProvider = LangProvider;
      ThemeProvider = Theme;
      Navbar = NavComponent;
      setComponentsLoaded(true);
    }).catch(() => {
      // Fallback if imports fail
      setComponentsLoaded(true);
    });
  }, []);

  // During SSR or before hydration, render minimal content
  if (!isMounted || !componentsLoaded) {
    return (
      <div suppressHydrationWarning={true}>
        {children}
      </div>
    );
  }

  // After hydration, render full app with contexts
  if (LanguageProvider && ThemeProvider && Navbar) {
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

  // Fallback if components couldn't load
  return (
    <div suppressHydrationWarning={true}>
      {children}
    </div>
  );
}
