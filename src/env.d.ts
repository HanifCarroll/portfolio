/// <reference path="../.astro/types.d.ts" />

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  hcAnalyticsClickTrackingReady?: boolean;
  hcTrackEvent: (
    eventName: string,
    properties?: Record<string, string | number | boolean | undefined>,
  ) => void;
}
