type TuesdayAnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackTuesdayEvent(eventName: string, payload: TuesdayAnalyticsPayload = {}) {
  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };
  const eventPayload = {
    event: eventName,
    event_location: "one_tuesday",
    page_title: document.title,
    page_path: window.location.pathname,
    ...payload,
  };

  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.dataLayer.push(eventPayload);
  analyticsWindow.gtag?.("event", eventName, {
    ...eventPayload,
    event: undefined,
    transport_type: "beacon",
  });
}
