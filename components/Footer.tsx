import Reveal from './Reveal';
import { roles } from '@/lib/content';

export default function Footer() {
  return (
    <section id="before" style={{ paddingBottom: 96 }}>
      <div className="wrap">
        <Reveal>
          <div className="sec-head"><span className="sec-num">06</span><h2 className="sec-title">Before this</h2></div>
        </Reveal>
        <div className="indent" style={{ marginTop: 30 }}>
          {roles.map((r, k) => (
            <Reveal key={r.t} delay={k * 70}>
              <div className="role">
                <div className="role-yr">{r.yr}</div>
                <div>
                  <div className="role-t">{r.t}</div>
                  <div className="role-o">{r.o}</div>
                  <div className="role-d">{r.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={90}>
            <div className="pubcard" style={{ marginTop: 26 }}>
              <p className="sublabel" style={{ margin: 0 }}>Publication</p>
              <div className="pub-t">Automatic IV Curve Diagnosis with Deep Learning</div>
              <div className="pub-m">
                48th IEEE Photovoltaic Specialists Conference, 2021 ·{' '}
                <a href="https://ieeexplore.ieee.org/document/9519033" style={{ color: 'var(--mark)' }}>ieeexplore ↗</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="cta" style={{ marginTop: 46 }}>
              <div className="cta-big">Working on something<br />that has to <em>hold up</em>?</div>
              <div className="cta-links">
                <a href="mailto:manavarora3660@gmail.com">manavarora3660@gmail.com</a><br />
                <a href="https://github.com/manav-ar">github</a> ·{' '}
                <a href="https://www.linkedin.com/in/manav-arora/">linkedin</a> ·{' '}
                <a href="cv.pdf">cv (pdf)</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
