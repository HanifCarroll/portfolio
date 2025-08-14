import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rapid Prototype in 2–3 Days | Validate Your SaaS Idea",
  description: "Free 45-min clarity call → clickable prototype in 2–3 days. See your idea, clickable, in days — not months.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}