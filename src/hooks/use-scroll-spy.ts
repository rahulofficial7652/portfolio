'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], options: IntersectionObserverInit = { rootMargin: '0% 0% -50% 0%' }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [ids, options]);

  return activeId;
}
