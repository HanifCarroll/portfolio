'use client';

import { usePathname } from 'next/navigation';
import StructuredData from '@/components/structured-data';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const getPageType = () => {
    if (pathname === '/fix') return 'fix';
    if (pathname === '/build') return 'build';
    return 'home';
  };

  return (
    <>
      <StructuredData type={getPageType()} />
      {children}
    </>
  );
}