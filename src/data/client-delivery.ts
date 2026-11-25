export const clientDelivery = {
  "desarmadero-la-torre": {
    status: "Catalog delivered · Operations prototype",
    liveLabel: "Explore operations prototype",
    es: {
      status: "Catálogo entregado · Prototipo de gestión",
      liveLabel: "Probá el prototipo de gestión",
    },
  },
  "desarmadero-operations-prototype": {
    status: "Clickable operations prototype",
    liveLabel: "Explore operations prototype",
    es: { status: "Prototipo interactivo de gestión", liveLabel: "Probá el prototipo de gestión" },
  },
  genrupt: {
    status: "Production client software",
    liveLabel: "Visit client product",
    es: {
      status: "Software del cliente en producción",
      liveLabel: "Visitá el producto del cliente",
    },
  },
  palabruno: {
    status: "Launched and handed off · Mobile apps later withdrawn",
    liveLabel: "View project website",
    es: {
      status: "Producto publicado y entregado · Las apps para celular ya no están disponibles",
      liveLabel: "Visitá el sitio del proyecto",
    },
  },
  "mucho-hangouts": {
    status: "Monthly engineering engagement · 2025",
    liveLabel: "Visit client product",
    es: {
      status: "Contrato mensual de desarrollo · 2025",
      liveLabel: "Visitá el producto del cliente",
    },
  },
} as const;

export type ClientDeliverySlug = keyof typeof clientDelivery;
