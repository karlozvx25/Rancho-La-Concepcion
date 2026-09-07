'use client';

import { photos } from '@/content/site';

export function Photo({
  index,
  className = '',
  eager = false,
}: {
  index: number;
  className?: string;
  eager?: boolean;
}) {
  const p = photos[index];
  return (
    <img
      className={className}
      src={'/media/' + p.file + '-1200.webp'}
      srcSet={`/media/${p.file}-640.webp 640w, /media/${p.file}-1200.webp 1200w, /media/${p.file}-2000.webp 2000w`}
      sizes={eager ? '100vw' : '(max-width: 700px) 100vw, 50vw'}
      alt={p.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      width={index === 0 ? 2000 : 1200}
      height={index === 0 ? 1425 : 1600}
    />
  );
}
