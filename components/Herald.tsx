import Reveal from './Reveal';
import Memo from './Memo';
import { tiers, HERALD_URL } from '@/lib/content';

export default function Herald() {
  return (
    <section id="herald">
      <div className="wrap">
        <Reveal>
          <div className="sec-head"><span className="sec-num">02</span><h2 className="sec-title">HERALD</h2></div>
        </Reveal>
        <Reveal delay={90}>
          <p className="lede indent">Language models are fluently, confidently wrong. HERALD marks every claim in an AI-written policy memo and resolves it at the cheapest tier that can decide.</p>
        </Reveal>

        <Reveal delay={150}><div className="indent" style={{ marginTop: 34 }}><Memo /></div></Reveal>

        <Reveal delay={90}>
          <div className="indent" style={{ marginTop: 44 }}>
            <p className="sublabel">Escalation path · claim type decides the entry tier</p>
            <div className="tiers">
              {tiers.map((t) => (
                <div className="tier" key={t.n} style={{ background: t.bg }}>
                  <div className="tier-n" style={{ color: t.fg }}>{t.n}</div>
                  <div className="tier-t" style={{ color: t.tc }}>{t.t}</div>
                  <div className="tier-m" style={{ color: t.fg }}>{t.m}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 10.5, color: 'var(--mute)', marginTop: 13 }}>
              ↳ six claim types route the entry point · statistical and comparative start at tier 1 · predictive, normative and synthesis skip straight to tier 2
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="indent two-col" style={{ marginTop: 46 }}>
            <div>
              <div className="stat-n">96<span>%</span></div>
              <div className="stat-l">accuracy, held-out set</div>
              <div className="stat-n" style={{ marginTop: 26 }}>23<span>%</span></div>
              <div className="stat-l">of single-call baseline cost</div>
              <div className="stat-n" style={{ marginTop: 26 }}>206</div>
              <div className="stat-l">claims, 4 benchmark sets</div>
            </div>
            <div className="margin-note">
              <p className="sublabel" style={{ color: 'var(--mark)' }}>What broke</p>
              <div className="prose" style={{ fontSize: 17 }}>
                <p>The first runs were expensive, and not where I expected. Claims kept escalating to Tier 3, the debate tier and by far the priciest, when they had no business being there.</p>
                <p>A prompt framing error at Tier 2 made the judge systematically under-confident, so it deferred upward instead of deciding. Fixing it cut cost a further <strong style={{ fontWeight: 400, background: 'linear-gradient(transparent 62%, var(--mark-soft) 62%)' }}>86%</strong> with no accuracy loss.</p>
                <p>The tier design was the easy part. The leak had been sitting in the traces since the first run. I just wasn&rsquo;t reading them.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="indent prose" style={{ marginTop: 40 }}>
            <p className="sublabel">What I&rsquo;d do differently</p>
            <p>The six-type taxonomy was hand-designed and never validated against alternatives. A learned router might beat it, and I don&rsquo;t know because I didn&rsquo;t test it. The cost instrumentation should also have come before the first benchmark run rather than after.</p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="links indent" style={{ marginTop: 36 }}>
            <a href={HERALD_URL}>Read the paper ↗</a>
            <a href={HERALD_URL}>Code ↗</a>
            <span>next.js · fastapi · gpt-4o · claude · deberta · mcp · braintrust</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
