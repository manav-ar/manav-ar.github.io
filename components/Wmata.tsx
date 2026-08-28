'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import WmataMap from './WmataMap';

const FRAMES = [1000,5000,9000,13000,18000,22000,26000,30000,34000,38000,42000,46000,51000,55000,59000,63000];
const file = (i: number) => `assets/rl-wmata/dqn_${String(i).padStart(2,'0')}_ep${FRAMES[i]}.jpg`;

export default function Wmata() {
  const [i, setI] = useState(FRAMES.length - 1);
  return (
    <section id="wmata" className="bleed">
      <div className="wrap">
        <Reveal>
          <div className="sec-head"><span className="sec-num">03</span><h2 className="sec-title">RL-WMATA</h2></div>
        </Reveal>
        <Reveal delay={90}>
          <p className="lede indent">Washington has 98 metro stations, six rail lines and 600,000 daily riders. Where should the next one go? Two agents, same environment, different answers.</p>
        </Reveal>

        <Reveal delay={150}><div className="indent" style={{ marginTop: 34 }}><WmataMap /></div></Reveal>

        <Reveal delay={90}>
          <div className="indent prose" style={{ marginTop: 44 }}>
            <p>Placement is sequential, since every station changes the value of every candidate that follows, so it maps onto an MDP. That only holds if the simulator is honest. The environment is built over real infrastructure: WMATA GTFS for the existing network, LODES commuting flows for demand, ACS demographics within 800 m of each of 86 candidate sites. Reward combines coverage gain (&alpha;=1.0), wait-time decrease (&beta;=0.1), trips served (&gamma;=0.001) and a placement bonus (&delta;=0.1).</p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="indent two-col" style={{ marginTop: 40, alignItems: 'start' }}>
            <div>
              <p className="sublabel">Watch DQN learn · drag to scrub</p>
              <div className="frame-box">
                {FRAMES.map((ep, k) => (
                  <img key={ep} src={file(k)} alt={`DQN placements at episode ${ep}`} style={{ display: k === i ? 'block' : 'none' }} />
                ))}
              </div>
              <div className="scrub-row">
                <span className="stat-l" style={{ margin: 0 }}>ep</span>
                <input type="range" min={0} max={FRAMES.length - 1} step={1} value={i}
                       aria-label="Training episode" onChange={(e) => setI(Number(e.target.value))} />
                <span className="ep">{FRAMES[i].toLocaleString()} / 63,000</span>
              </div>
            </div>
            <div className="margin-note">
              <p className="sublabel" style={{ color: 'var(--mark)' }}>What I&rsquo;d do differently</p>
              <div className="prose" style={{ fontSize: 17 }}>
                <p>The reward function is the weakest part. Four weighted terms collapsed into one scalar lets the agent trade coverage against wait time in ways I never explicitly sanctioned, and I picked the weights by hand.</p>
                <p>Wait times are approximated from station count and demand rather than measured service data, the 800 m catchment is a fixed radius applied to neighbourhoods that are nothing alike, and the LODES data is from 2019, so the whole thing is calibrated to pre-COVID commuting.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="links indent" style={{ marginTop: 36 }}>
            <a href="https://github.com/manav-ar/RL-WMATA">Code ↗</a>
            <span>custom gymnasium env · stable-baselines3 · gtfs + lodes + acs · 1M timesteps · with I. Alaeddin, J. Joy, S. Wadhwani</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
