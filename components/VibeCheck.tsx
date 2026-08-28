import Reveal from './Reveal';
import VibeSearch from './VibeSearch';

export default function VibeCheck() {
  return (
    <section id="vibecheck">
      <div className="wrap">
        <Reveal>
          <div className="sec-head"><span className="sec-num">04</span><h2 className="sec-title">VibeCheck</h2></div>
        </Reveal>
        <Reveal delay={90}>
          <p className="lede indent">Restaurant search by ambience, not cuisine. Describe a room, or show one, and get places that feel the same.</p>
        </Reveal>
        <Reveal delay={150}><div className="indent" style={{ marginTop: 32 }}><VibeSearch /></div></Reveal>
        <Reveal delay={90}>
          <div className="indent prose" style={{ marginTop: 34 }}>
            <p>Photos and text land in one shared space via CLIP, so a phrase and a photograph of that phrase retrieve the same venues. FAISS keeps search fast over dense vectors; UMAP and HDBSCAN cluster venues into aesthetic neighbourhoods you browse rather than query.</p>
            <p>Embedding systems degrade quietly, so the lifecycle is instrumented as carefully as the models: MLflow tracking runs, DVC versioning the index, Evidently watching for drift.</p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="links indent" style={{ marginTop: 30 }}>
            <a href="https://github.com/manav-ar/VibeCheck">Code ↗</a>
            <span>clip · sentence-bert · faiss · umap · hdbscan · mlflow · dvc · evidently</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
