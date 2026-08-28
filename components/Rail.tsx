'use client';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'top', n: '01', l: 'intro' },
  { id: 'herald', n: '02', l: 'herald' },
  { id: 'wmata', n: '03', l: 'rl-wmata' },
  { id: 'vibecheck', n: '04', l: 'vibecheck' },
  { id: 'archive', n: '05', l: 'archive' },
  { id: 'before', n: '06', l: 'experience' },
];

export default function Rail() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Sections">
      <div className="rail-top">
        <a href="#top" className="rail-name">Manav<br />Arora</a>
        <ul className="rail-ix">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="rail-it" data-on={active === s.id}>
                <span className="rail-bar" /><b>{s.n}</b> <span className="rail-l">{s.l}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rail-ct">
        <a className="rail-cv" href="cv.pdf">CV ↓</a>
        <a href="mailto:manavarora3660@gmail.com">email</a>
        <a href="https://github.com/manav-ar">github</a>
        <a href="https://www.linkedin.com/in/manav-arora/">linkedin</a>
      </div>
    </nav>
  );
}
