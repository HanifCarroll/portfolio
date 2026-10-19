export const clientDelivery = {
  "desarmadero-la-torre": {
    status: "Catalog delivered · Operations prototype",
    liveLabel: "Explore operations prototype",
  },
  "desarmadero-operations-prototype": {
    status: "Clickable operations prototype",
    liveLabel: "Explore operations prototype",
  },
  genrupt: {
    status: "Production client software",
    liveLabel: "Visit client product",
  },
  palabruno: {
    status: "Launched and handed off · Mobile apps later withdrawn",
    liveLabel: "View project website",
  },
  "mucho-hangouts": {
    status: "Monthly engineering engagement · 2025",
    liveLabel: "Visit client product",
  },
} as const;

export type ClientDeliverySlug = keyof typeof clientDelivery;
