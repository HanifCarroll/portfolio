import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "UX Clarity Audit for SaaS | 3–5 Quick Wins in 24h",
  description: "Free 45-min UX analysis → next-day Loom + Quick-Win PDF with 3–5 changes. Make your product easier to use, more engaging, and more likely to convert.",
};

export default function FixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}