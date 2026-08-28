'use client';

type Claim = { text: string; tier: 1|2|3|4; n: number; type: string; verdict: string; note: string; src: string };

const claims: Record<number, Claim> = {
  1: { text: 'Nationwide ridership sat at roughly 79% of 2019 levels through 2024', tier: 1, n: 1,
       type: 'statistical', verdict: 'tier 1 · 0.94',
       note: 'Entailed by source table. Resolved by local NLI at no cost.', src: 'APTA Ridership Report, Q4 2024' },
  2: { text: 'concentrated in commuter rail rather than urban bus', tier: 2, n: 2,
       type: 'comparative', verdict: 'tier 2 · 0.88',
       note: 'NLI ambiguous on the comparison; escalated to judge, which confirmed against two independent tables.', src: 'FTA National Transit Database' },
  3: { text: 'risks a self-reinforcing decline in service quality', tier: 3, n: 3,
       type: 'causal', verdict: 'tier 3 · debate',
       note: 'Expert and methodologist split on direction of causality; skeptic flagged reverse causation. Synthesiser returned qualified support.', src: '3-persona debate, 2 rounds' },
  4: { text: 'be redirected from expansion toward state-of-good-repair', tier: 4, n: 4,
       type: 'normative', verdict: 'tier 4 · human',
       note: 'Prescriptive claim. No verification tier can adjudicate policy preference, so it routes to human review by design.', src: 'awaiting reviewer' },
  5: { text: 'the two are not strictly substitutable in current appropriations law', tier: 2, n: 5,
       type: 'statutory', verdict: 'tier 2 · 0.91',
       note: 'NLI lacked the source in context. Judge verified against retrieved statute text.', src: 'GovInfo · 49 U.S.C. § 5309' },
};

function C({ id }: { id: number }) {
  const c = claims[id];
  return (
    <span className={`mclaim mt${c.tier}`} tabIndex={0}>
      {c.text}<sup>[{c.n}]</sup>
      <span className="mpv">
        <span className="mpv-hd"><span>{c.type}</span><span className="k">{c.verdict}</span></span>
        {c.note}
        <span className="mpv-src">↳ {c.src}</span>
      </span>
    </span>
  );
}

export default function Memo() {
  return (
    <div className="memo-box">
      <div className="memo-bar">
        <span className="memo-fn">memo_draft_04.md · 12 claims · 11 auto-resolved</span>
        <span className="memo-lg">
          <span><i className="msw mt1" />tier 1 nli</span>
          <span><i className="msw mt2" />tier 2 judge</span>
          <span><i className="msw mt3" />tier 3 debate</span>
          <span><i className="msw mt4" />human</span>
        </span>
      </div>
      <div className="memo-body">
        Public transit ridership has not recovered to pre-pandemic levels. <C id={1} />, and the shortfall is <C id={2} />. Agencies have responded by cutting frequency, which <C id={3} />.
        {' '}Federal capital funding should therefore <C id={4} />, though <C id={5} />.
      </div>
      <div className="memo-ft">
        <div><div className="stat-n">11<span>/12</span></div><div className="stat-l">auto-resolved</div></div>
        <div><div className="stat-n">$0.04</div><div className="stat-l">per memo</div></div>
        <div><div className="stat-n">1</div><div className="stat-l">escalated to human</div></div>
      </div>
      <p className="memo-cap">Illustrative example of the review interface. Tier assignments follow the live routing logic.</p>
    </div>
  );
}
