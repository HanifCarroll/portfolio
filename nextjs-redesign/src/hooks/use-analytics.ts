'use client';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export function useAnalytics() {
  const trackEvent = (event: string, props?: Record<string, string | number>) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(event, { props });
    }
  };

  const trackPathSelection = (path: 'fix' | 'build') => {
    trackEvent('Path Selected', { path });
  };

  const trackBookingSectionView = (path: 'fix' | 'build') => {
    trackEvent('Booking Section View', { path });
  };

  const trackBookingClick = (path: 'fix' | 'build') => {
    trackEvent('Booking Click', { path });
  };

  return {
    trackEvent,
    trackPathSelection,
    trackBookingSectionView,
    trackBookingClick,
  };
}