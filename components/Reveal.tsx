'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }:
  { children: ReactNode; delay?: number; as?: any; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-shown={shown}
         style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
