---
icon: fab fa-youtube
order: 4
---

<style>
/* ── Shared with about.md — Chirpy CSS variable system ── */

/* ── PAGE HEADER ── */
.yt-hero {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color, rgba(128,128,128,0.2));
  margin-bottom: 2rem;
}
.yt-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--link-color);
  margin: 0 0 0.3rem;
}
.yt-title {
  font-size: clamp(1.7rem, 4vw, 2.3rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0 0 0.4rem;
  color: var(--heading-color, var(--text-color));
}
.yt-subtitle {
  font-size: 0.95rem;
  opacity: 0.6;
  margin: 0 0 1.2rem;
}
.yt-channel-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 0.83rem;
  font-weight: 500;
  text-decoration: none !important;
  background: var(--link-color);
  color: #fff !important;
  border: 1px solid var(--link-color);
  transition: opacity 0.18s;
}
.yt-channel-btn:hover { opacity: 0.85; }

/* ── SECTION HEADER ── */
.yt-section-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin: 2rem 0 1rem;
}
.yt-section-head h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.yt-section-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--link-color);
  opacity: 0.85;
}

/* ── VIDEO GRID ── */
.yt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
}

/* ── VIDEO CARD ── */
.yt-card {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.18s, transform 0.18s;
}
.yt-card:hover {
  border-color: var(--link-color);
  transform: translateY(-2px);
}

/* Embed wrapper — 16:9 */
.yt-embed {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  background: rgba(0,0,0,0.08);
}
.yt-embed iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: none;
}

/* Card body */
.yt-card-body {
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}
.yt-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}
.yt-card-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.35;
}
.yt-card-date {
  font-size: 0.68rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--link-color) 10%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 22%, transparent);
  font-family: 'Source Code Pro', monospace;
  flex-shrink: 0;
}
.yt-card-desc {
  font-size: 0.815rem;
  opacity: 0.65;
  line-height: 1.5;
  margin: 0;
}
.yt-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 0.2rem;
}
.yt-tag {
  font-size: 0.66rem;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--link-color) 8%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 18%, transparent);
  font-family: 'Source Code Pro', monospace;
}

/* ── FEATURED (single wide card) ── */
.yt-featured {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.18s;
  margin-bottom: 1rem;
}
.yt-featured:hover { border-color: var(--link-color); }
.yt-featured .yt-embed { padding-bottom: 45%; }
.yt-featured .yt-card-body { padding: 1rem 1.15rem; }
.yt-featured .yt-card-title { font-size: 1rem; }

/* ── SERIES BADGE ── */
.yt-series-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.68rem;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 20px;
  background: rgba(239,68,68,0.1);
  color: #dc2626;
  border: 1px solid rgba(239,68,68,0.25);
  margin-bottom: 0.85rem;
}
.yt-series-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #dc2626;
}

/* ── HOW TO ADD NOTE ── */
.yt-howto {
  border-left: 3px solid var(--link-color);
  border-radius: 0 8px 8px 0;
  background: color-mix(in srgb, var(--link-color) 5%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
  border-right: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
  padding: 0.85rem 1.1rem;
  font-size: 0.82rem;
  opacity: 0.75;
  margin-top: 2rem;
  line-height: 1.6;
}
.yt-howto strong {
  color: var(--link-color);
  display: block;
  margin-bottom: 3px;
  font-size: 0.85rem;
}
.yt-howto code {
  font-size: 0.78rem;
  background: color-mix(in srgb, var(--link-color) 10%, transparent);
  padding: 1px 5px;
  border-radius: 3px;
}
</style>

<!-- ── HERO ── -->
<div class="yt-hero">
  <p class="yt-eyebrow">Supply Chain · Data · AI — Building in Public</p>
  <h1 class="yt-title">📺 YouTube</h1>
  <p class="yt-subtitle">Project walkthroughs, analytics breakdowns, and supply chain career content — built from the floor up, no gatekeeping.</p>
  <a href="https://www.youtube.com/@TheNiraj_" class="yt-channel-btn" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    Subscribe on YouTube
  </a>
</div>

---

<!-- ════════════════════════════════════════
     FEATURED VIDEO
════════════════════════════════════════ -->

<div class="yt-section-head">
  <h2>📌 Featured</h2>
  <span class="yt-section-label">Latest</span>
</div>

<div class="yt-featured">
  <div class="yt-embed">
    <iframe src="https://www.youtube.com/embed/OZLVAsMAGTY" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="yt-card-body">
    <div class="yt-card-top">
      <p class="yt-card-title">The honest explanation of AI that nobody bothered to give you. No engineering degree required.
</p>
      <span class="yt-card-date">May 2026</span>
    </div>
    <p class="yt-card-desc">In this video I break down exactly how AI works in plain language. No engineering degree. No confusing jargon. Just real examples that actually make sense.</p>
    <div class="yt-card-tags">
      <span class="yt-tag">AI</span>
      <span class="yt-tag">LLM</span>
      <span class="yt-tag">Prompt Engineering</span>
      <span class="yt-tag">Image Generation</span>
      <span class="yt-tag">Gen AI</span>
    </div>
  </div>
</div>

---

<!-- ════════════════════════════════════════
     SERIES: FLOOR TO FORECAST
     Supply Chain analytics walkthroughs
     mapped to the roadmap stages.
════════════════════════════════════════ -->

<div class="yt-section-head">
  <h2>🏭 Floor to Forecast</h2>
  <span class="yt-section-label">Series</span>
</div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Series</div>

<div class="yt-grid">

  <!-- Add Floor to Forecast video episodes here as they publish -->
  <!-- Copy the block below and update src, title, date, desc, tags -->

  <!--
  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">Episode Title Here</p>
        <span class="yt-card-date">Month Year</span>
      </div>
      <p class="yt-card-desc">Description of the episode.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">Tag</span>
      </div>
    </div>
  </div>
  -->

</div>

---

<!-- ════════════════════════════════════════
     SERIES: SUPPLY CHAIN ANALYTICS
     Project builds, SQL, Power BI, Python
════════════════════════════════════════ -->

<div class="yt-section-head">
  <h2>📊 Supply Chain Analytics</h2>
  <span class="yt-section-label">Series</span>
</div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Series</div>

<div class="yt-grid">

  <!-- Add supply chain analytics project videos here -->

</div>

---

<!-- ════════════════════════════════════════
     SERIES: INVESTMENT EXPERIMENT
════════════════════════════════════════ -->

<div class="yt-section-head">
  <h2>💰 Investment Experiment</h2>
  <span class="yt-section-label">Series</span>
</div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Series</div>

<div class="yt-grid">

  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/MwuX8JzkPTU" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">Experimenting the Snowball Effect. Roadmap $1 to $1M.</p>
        <span class="yt-card-date">April 2025</span>
      </div>
      <p class="yt-card-desc">The same compounding logic that grows wealth also applies to skills. This video breaks down consistency, exponential growth, and long-term thinking — principles that carry directly into supply chain planning and forecasting.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">DCA</span>
        <span class="yt-tag">Investing</span>
        <span class="yt-tag">Personal Finance</span>
        <span class="yt-tag">Compounding</span>
      </div>
    </div>
  </div>

</div>

---

<!-- ════════════════════════════════════════
     ALL VIDEOS — ONE-OFFS
════════════════════════════════════════ -->

<div class="yt-section-head">
  <h2>🔨 All Videos</h2>
  <span class="yt-section-label">One-Offs</span>
</div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Content</div>

<div class="yt-grid">

  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/eCd8uutKZpw" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">Facial Recognition with ANN and CNN</p>
        <span class="yt-card-date">Mar 2021</span>
      </div>
      <p class="yt-card-desc">An early project building a biometric system using Artificial Neural Networks and Convolutional Neural Networks — foundational deep learning that now informs the AI work I apply to supply chain operations.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">Deep Learning</span>
        <span class="yt-tag">Python</span>
        <span class="yt-tag">Neural Networks</span>
        <span class="yt-tag">AI</span>
      </div>
    </div>
  </div>

  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/qF0GvOpcPLo" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">COVID-19 Data Interactive Dashboard</p>
        <span class="yt-card-date">Mar 2021</span>
      </div>
      <p class="yt-card-desc">Built a live COVID-19 dashboard pulling from public APIs — the same data pipeline and visualization thinking I now apply to inventory KPI dashboards and supply chain reporting in Power BI.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">Python</span>
        <span class="yt-tag">Django</span>
        <span class="yt-tag">APIs</span>
        <span class="yt-tag">Dashboard</span>
        <span class="yt-tag">Data Viz</span>
      </div>
    </div>
  </div>

  <!-- ↓ ADD MORE VIDEOS HERE — copy the block above ↓ -->

</div>

---

<div class="yt-howto">
  <strong>This channel is being built alongside the Floor to Forecast roadmap.</strong>
  Every video maps to a real stage of the supply chain analytics journey — from Excel fundamentals to Python, SQL, Power BI, forecasting and AI. If you are a warehouse worker, retail associate, or logistics coordinator figuring out where to start — subscribe and drop a comment. Your question might become the next video.
</div>