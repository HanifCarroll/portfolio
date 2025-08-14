import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Technical Product Partner for SaaS Founders",
  description: "Meet Hanif Carroll, Fractional CTO & Product Partner with 8+ years helping bootstrapped founders build software users love. Learn about my technical leadership approach and core values.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}