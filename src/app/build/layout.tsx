import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic MVP Planning | Validate Your SaaS Idea",
  description: "Free 45-min strategy call → a clear blueprint for your MVP. Live, collaborative session to map your path forward.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}