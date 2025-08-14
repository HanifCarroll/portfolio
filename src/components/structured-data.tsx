interface StructuredDataProps {
  type: 'home' | 'fix' | 'build';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Technical Product Partner",
    "url": "https://fixbuild.hanifcarroll.com",
    "description": "Technical Product Partner for SaaS founders — UX clarity audits and rapid prototypes",
    "founder": {
      "@type": "Person",
      "name": "Hanif Carroll"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": type === 'fix' ? "UX Clarity Audit" : "Rapid Prototype Development",
    "description": type === 'fix' 
      ? "Free 45-min UX analysis with next-day Loom + Quick-Win PDF with 3–5 changes"
      : "Free 45-min clarity call with clickable prototype in 2–3 days",
    "provider": {
      "@type": "Organization",
      "name": "Technical Product Partner"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "Online Consultation",
      "url": type === 'fix' 
        ? "https://cal.com/hanifcarroll/fix-my-product"
        : "https://cal.com/hanifcarroll/build-my-idea"
    }
  };

  const breadcrumbData = type !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fixbuild.hanifcarroll.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": type === 'fix' ? "Fix My Product" : "Build My Idea",
        "item": `https://fixbuild.hanifcarroll.com/${type}`
      }
    ]
  } : null;

  const structuredData = type === 'home' 
    ? [organizationData]
    : [organizationData, serviceData, breadcrumbData].filter(Boolean);

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}