'use client';
import { useState } from 'react';

const DC = "M150 14 L286 150 L200 236 L166 272 L140 300 L120 286 L108 250 L96 210 L78 176 L44 140 L14 110 Z";

const AGENTS = {
  ppo: {
    label: 'PPO', cov: '10.7', color: 'var(--mark)',
    strategy: 'PPO · spread for spatial reach',
    hoods: 'Palisades, Anacostia, National Mall, Blue Plains, Bellevue',
    stations: [
      { x: 42, y: 128, n: 'Palisades' }, { x: 96, y: 196, n: "Nat'l Mall" },
      { x: 182, y: 216, n: 'Anacostia' }, { x: 126, y: 268, n: 'Bellevue' },
      { x: 132, y: 292, n: 'Blue Plains' },
    ],
  },
  dqn: {
    label: 'DQN', cov: '9.6', color: '#2E7D6B',
    strategy: 'DQN · clustered for connectivity',
    hoods: 'Anacostia, Anacostia Naval Station, Palisades, National Mall, Crestwood',
    stations: [
      { x: 42, y: 128, n: 'Palisades' }, { x: 112, y: 106, n: 'Crestwood' },
      { x: 96, y: 196, n: "Nat'l Mall" }, { x: 182, y: 216, n: 'Anacostia' },
      { x: 122, y: 246, n: 'Anacostia NS' },
    ],
  },
} as const;

export default function WmataMap() {
  const [k, setK] = useState<'ppo' | 'dqn'>('ppo');
  const a = AGENTS[k];
  return (
    <div>
      <div className="map-top">
        <span className="sublabel" style={{ margin: 0 }}>Optimal placements · 1M timesteps</span>
        <div className="map-tg">
          {(['ppo', 'dqn'] as const).map((key) => (
            <button key={key} className="filter" data-on={k === key} onClick={() => setK(key)}>
              {AGENTS[key].label} · {AGENTS[key].cov}%
            </button>
          ))}
        </div>
      </div>

      <div className="map-grid">
        <svg viewBox="0 0 300 330" role="img" aria-label={`Washington DC with ${a.label} station placements`}>
          <path d={DC} fill="#FFFFFF" stroke="#CFC5B4" strokeWidth="1.2" />
          {(['ppo', 'dqn'] as const).map((key) =>
            AGENTS[key].stations.map((s, i) => (
              <g key={`${key}-${i}`} className="stn" data-hide={k !== key}>
                <circle cx={s.x} cy={s.y} r="6" fill={AGENTS[key].color} />
                <text x={s.x + 12} y={s.y + 3} fontFamily="var(--mono)" fontSize="8" fill="var(--mute)">{s.n}</text>
              </g>
            ))
          )}
        </svg>

        <div>
          <div className="stats" style={{ gap: 32, marginBottom: 22 }}>
            <div><div className="stat-n">{a.cov}<span>%</span></div><div className="stat-l">new coverage</div></div>
            <div><div className="stat-n">6.3<span> min</span></div><div className="stat-l">wait, from 8.7</div></div>
          </div>
          <div className="hoods">
            <b>{a.strategy}</b>
            {a.hoods}
          </div>
          <p className="map-shared">
            Both agents independently chose <em>Anacostia</em>, <em>Palisades</em> and the <em>National Mall</em>, which is at least a weak check that the environment is measuring something real.
          </p>
        </div>
      </div>
      <p className="memo-cap">Geography approximated from the project figures; positions are indicative.</p>
    </div>
  );
}
