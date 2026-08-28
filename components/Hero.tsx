import Reveal from './Reveal';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 96 }}>
      <div className="wrap">
        <Reveal delay={0}><p className="eyebrow indent">{hero.eyebrow}</p></Reveal>
        <Reveal delay={110}>
          <h1 className="display indent">
            {hero.headline[0]}<br />{hero.headline[1]}<em>{hero.headlineEm}</em>.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="eyebrow indent" style={{ marginTop: 26 }}>{hero.credentials}</p>
        </Reveal>
        <Reveal delay={320}>
          <div className="indent" style={{ height: 1, background: 'var(--wash)', margin: '34px 0 26px' }} />
        </Reveal>
        <Reveal delay={400}>
          <p className="lede indent">
            Two years shipping production ML at PwC, screening{' '}
            <span className="claim" tabIndex={0}>
              {hero.claimText}<sup>[C-001]</sup>
              <span className="note"><b>Provenance</b>{hero.claimNote}</span>
            </span>{' '}
            for fraud and running regulatory NLP across every company listed on the Singapore Exchange.
            Now building claim-verification pipelines for what language models get confidently,
            fluently wrong.
          </p>
        </Reveal>
        <Reveal delay={500}>
          <div className="stats indent" style={{ marginTop: 44 }}>
            {hero.stats.map((s) => (
              <div key={s.l}>
                <div className="stat-n">{s.n}<span>{s.suf}</span></div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={600}>
          <div className="links indent" style={{ marginTop: 44 }}>
            <a href="#herald" style={{ border: 'none', color: 'var(--mute)' }}>↓ three systems, in depth</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
