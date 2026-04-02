"use client";

import { HelmetProvider } from 'react-helmet-async';
import { ReactNode, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import '../firebase'; // Initialize Firebase Analytics

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Send a pageview event to Google Analytics on route change
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      (window as any).gtag('config', 'G-0Q3GY1QWS5', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      {children}
    </HelmetProvider>
  );
}
