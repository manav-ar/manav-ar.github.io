'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import { archive, filters } from '@/lib/content';

export default function Archive() {
  const [active, setActive] = useState('all');
  let n = 0;
  return (
    <section id="archive" className="bleed">
      <div className="wrap">
        <Reveal>
          <div className="sec-head"><span className="sec-num">05</span><h2 className="sec-title">Archive</h2></div>
        </Reveal>
        <Reveal delay={90}>
          <p className="lede indent">Fifteen more projects. Thirteen have a paper, poster or deck behind them.</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="filters indent" style={{ marginTop: 30 }}>
            {filters.map((f) => (
              <button key={f.k} className="filter" data-on={active === f.k}
                      onClick={() => setActive(f.k)}>{f.label}</button>
            ))}
          </div>
        </Reveal>
        <div className="indent">
          {archive.map((grp) => {
            const items = grp.items.filter((e) => active === 'all' || e.tags.includes(active));
            if (!items.length) return null;
            return (
              <Reveal key={grp.g} delay={60}>
                <p className="grp">{grp.g}</p>
                {items.map((e) => {
                  n += 1;
                  const idx = String(n).padStart(2, '0');
                  return (
                    <div className="entry" key={e.t}>
                      <div className="entry-i">{idx}</div>
                      <div>
                        <div className="entry-t">{e.t}</div>
                        <div className="entry-d">{e.d}</div>
                        <div className="entry-m">
                          {e.links.map((l, k) => (
                            <span key={l.l}>{k > 0 && ' · '}<a href={l.h}>{l.l} ↗</a></span>
                          ))}
                          {e.meta && <span style={{ color: 'var(--mute)' }}> · {e.meta}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
