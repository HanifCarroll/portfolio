'use client';

import { useEffect, useRef } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useAnalytics } from '@/hooks/use-analytics';

interface BookingEmbedProps {
  calUrl?: string;
  fallbackText: string;
  path: 'fix' | 'build';
}

export default function BookingEmbed({ calUrl, fallbackText, path }: BookingEmbedProps) {
  const { trackBookingSectionView, trackBookingClick } = useAnalytics();
  const hasTrackedView = useRef(false);

  useEffect(() => {
    // Track booking section view once
    if (!hasTrackedView.current) {
      trackBookingSectionView(path);
      hasTrackedView.current = true;
    }
  }, [path, trackBookingSectionView]);

  useEffect(() => {
    if (calUrl) {
      (async function () {
        const namespace = path === 'fix' ? 'fix-my-product' : 'build-my-idea';
        const cal = await getCalApi({ namespace });
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      })();
    }
  }, [calUrl, path]);

  if (!calUrl) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <p className="text-gray-500 mb-4">Booking calendar will be embedded here</p>
        <p className="text-sm text-gray-400">{fallbackText}</p>
      </div>
    );
  }

  const handleBookingClick = () => {
    trackBookingClick(path);
  };

  const calPath = calUrl.replace('https://cal.com/', '');
  const namespace = path === 'fix' ? 'fix-my-product' : 'build-my-idea';

  return (
    <div onClick={handleBookingClick}>
      <Cal 
        namespace={namespace}
        calLink={calPath}
        style={{ width: '100%', height: '500px', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}