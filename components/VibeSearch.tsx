'use client';
import { useState } from 'react';

const QUERIES = [
  { q: 'cozy, low light, worn wood', mode: 'text' },
  { q: 'bright, tiled, loud', mode: 'text' },
  { q: 'a photo of a marble bar', mode: 'image' },
] as const;

const RESULTS: Record<string, { n: string; s: string; a: string; b: string }[]> = {
  'cozy, low light, worn wood': [
    { n: 'Le Diplomate', s: '0.91', a: '#3E2C22', b: '#8A5A38' },
    { n: 'The Dabney', s: '0.88', a: '#4A3324', b: '#9C6A40' },
    { n: "Rose's Luxury", s: '0.84', a: '#332620', b: '#7A5236' },
  ],
  'bright, tiled, loud': [
    { n: 'Colada Shop', s: '0.89', a: '#E4E9EC', b: '#7FA8BC' },
    { n: 'Taqueria Habanero', s: '0.86', a: '#EFE6D8', b: '#D4A24C' },
    { n: 'Compass Rose', s: '0.81', a: '#E8E4DC', b: '#A8B8A0' },
  ],
  'a photo of a marble bar': [
    { n: 'Maydan', s: '0.93', a: '#D8D2C8', b: '#6E6458' },
    { n: 'Bresca', s: '0.87', a: '#E2DCD2', b: '#8A8074' },
    { n: 'Anju', s: '0.82', a: '#CFC8BE', b: '#5E564C' },
  ],
};

export default function VibeSearch() {
  const [q, setQ] = useState<string>(QUERIES[0].q);
  const res = RESULTS[q];
  return (
    <div className="vs">
      <div className="vs-bar">
        <span className="vs-ic">◎</span>
        <span className="vs-q">{q}</span>
        <span className="vs-hint">CLIP + Sentence-BERT → FAISS</span>
      </div>
      <div className="vs-chips">
        {QUERIES.map((x) => (
          <button key={x.q} className="filter" data-on={q === x.q} onClick={() => setQ(x.q)}>
            {x.mode === 'image' ? '⌷ ' : '" '}{x.q}
          </button>
        ))}
      </div>
      <div className="vs-res" key={q}>
        {res.map((r, i) => (
          <div className="vs-card" key={r.n} style={{ animationDelay: `${i * 70}ms` }}>
            <div className="vs-sw" style={{ background: `linear-gradient(135deg, ${r.a}, ${r.b})` }} />
            <div className="vs-meta">
              <div className="vs-n">{r.n}</div>
              <div className="vs-s">cosine {r.s}</div>
            </div>
            <div className="vs-bar-outer"><div className="vs-bar-in" style={{ width: `${Number(r.s) * 100}%` }} /></div>
          </div>
        ))}
      </div>
      <p className="memo-cap">Illustrative. Colour fields stand in for the venue photos in the live index.</p>
    </div>
  );
}
