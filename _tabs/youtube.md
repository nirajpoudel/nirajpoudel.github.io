---
icon: fab fa-youtube
order: 2
title: YouTube
---

<style>
/* ── YouTube Page — Full dark/light mode via Chirpy CSS variables ── */

.yt-hero-banner {
  background: linear-gradient(135deg, #1a0505 0%, #3d0b0b 50%, #c0392b 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  margin: 8px 0 40px;
  position: relative;
  overflow: hidden;
}
.yt-hero-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}
.yt-hero-banner::after {
  content: "";
  position: absolute;
  top: -40px; right: -40px;
  width: 220px; height: 220px;
  background: radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%);
  pointer-events: none;
}
.yt-hero-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ff6b6b;
  border: 1px solid rgba(255,107,107,0.45);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.yt-hero-banner h2 {
  color: #fff !important;
  font-size: 2rem !important;
  margin: 0 0 10px !important;
  border: none !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
}
.yt-hero-banner p {
  color: rgba(255,255,255,0.78);
  font-size: 1rem;
  margin: 0 0 24px;
  line-height: 1.65;
  max-width: 640px;
}
.yt-channel-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.83rem;
  font-weight: 700;
  text-decoration: none !important;
  background: #ff0000;
  color: #fff !important;
  border: 1px solid #ff0000;
  transition: opacity 0.18s;
}
.yt-channel-btn:hover { opacity: 0.85; }

/* ── DIVIDER ── */
.yt-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 44px 0 26px;
}
.yt-divider-line {
  flex: 1;
  height: 1px;
  background: var(--border-color);
}
.yt-divider-label {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--body-color);
  background: var(--main-bg);
  padding: 4px 14px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  white-space: nowrap;
}

/* ── SERIES BADGE ── */
.yt-series-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(239,68,68,0.12);
  color: #ef4444;
  border: 1px solid rgba(239,68,68,0.28);
  margin-bottom: 18px;
}
.yt-series-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #ef4444;
  flex-shrink: 0;
}

/* ── FEATURED CARD ── */
.yt-featured {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow .2s, transform .2s;
  margin-bottom: 8px;
}
.yt-featured:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.yt-featured-header {
  padding: 12px 18px 10px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 10px;
}
.yt-featured-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #ff0000;
  color: #fff;
  padding: 3px 9px;
  border-radius: 20px;
}
.yt-featured-title-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--heading-color);
}

/* ── EMBED ── */
.yt-embed {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  background: rgba(0,0,0,0.1);
}
.yt-embed iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: none;
}

/* ── CARD BODY ── */
.yt-card-body {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.yt-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}
.yt-card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0;
  line-height: 1.4;
}
.yt-card-date {
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  padding: 3px 10px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--link-color) 12%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 25%, transparent);
  flex-shrink: 0;
}
.yt-card-desc {
  font-size: 0.82rem;
  color: var(--body-color);
  line-height: 1.6;
  margin: 0;
}
.yt-card-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.yt-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: var(--sidebar-bg);
  color: var(--body-color);
  border: 1px solid var(--border-color);
}

/* ── VIDEO GRID ── */
.yt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}
.yt-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow .2s, transform .2s;
}
.yt-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

/* ── CLOSING CTA ── */
.yt-cta {
  background: linear-gradient(135deg, #1a0505 0%, #c0392b 100%);
  border-radius: 14px;
  padding: 36px 28px;
  margin: 44px 0 8px;
  text-align: center;
}
.yt-cta h3 {
  color: #fff !important;
  font-size: 1.2rem !important;
  margin: 0 0 10px !important;
  border: none !important;
}
.yt-cta p {
  color: rgba(255,255,255,0.75);
  font-size: 0.85rem;
  line-height: 1.7;
  margin: 0 0 20px;
}
.yt-cta-divider {
  width: 40px; height: 2px;
  background: #ff6b6b;
  border-radius: 2px;
  margin: 14px auto;
}
.yt-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 20px;
  background: #ff0000;
  color: #fff !important;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none !important;
  margin: 0 5px 8px;
  transition: opacity .18s;
}
.yt-cta-btn:hover { opacity: 0.85; }

@media (max-width: 600px) {
  .yt-hero-banner { padding: 32px 18px 28px; }
  .yt-hero-banner h2 { font-size: 1.55rem !important; }
  .yt-grid { grid-template-columns: 1fr; }
}
</style>

<div class="yt-hero-banner">
  <span class="yt-hero-eyebrow">Building in Public</span>
  <h2>▶️ YouTube</h2>
  <p>Code walkthroughs, project demos, and investment experiment updates — all public, all documented, no fluff.</p>
  <a href="https://www.youtube.com/@TheNiraj_" class="yt-channel-btn" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    Subscribe on YouTube
  </a>
</div>

<div class="yt-divider"><div class="yt-divider-line"></div><span class="yt-divider-label">📌 Featured — Latest</span><div class="yt-divider-line"></div></div>

<div class="yt-featured">
  <div class="yt-featured-header">
    <span class="yt-featured-badge">YouTube</span>
    <span class="yt-featured-title-text">What If You Invest Right Before a Market Crash? DCA VS Lump Sum.</span>
  </div>
  <div class="yt-embed">
    <iframe src="https://www.youtube.com/embed/ZEoB38K-anM" allowfullscreen loading="lazy"></iframe>
  </div>
  <div class="yt-card-body">
    <div class="yt-card-top">
      <p class="yt-card-title">What If You Invest Right Before a Market Crash? DCA VS Lump Sum.</p>
      <span class="yt-card-date">May 2026</span>
    </div>
    <p class="yt-card-desc">Most people say "just DCA" without actually understanding the tradeoff between DCA and Lump Sum investing. So I decided to compare both strategies using market crash scenarios, volatility, and long-term investing logic.</p>
    <div class="yt-card-tags">
      <span class="yt-tag">DCA</span>
      <span class="yt-tag">Lump Sum</span>
      <span class="yt-tag">Investing</span>
      <span class="yt-tag">Wealth Generation</span>
    </div>
  </div>
</div>

<div class="yt-divider"><div class="yt-divider-line"></div><span class="yt-divider-label">💰 Investment Experiment Series</span><div class="yt-divider-line"></div></div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Series</div>

<div class="yt-grid">
  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/MwuX8JzkPTU" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">Experimenting the Snowball Effect. Roadmap $1 to 1M dollars.</p>
        <span class="yt-card-date">Apr 2025</span>
      </div>
      <p class="yt-card-desc">Most people underestimate how powerful consistency is. This video breaks down how small actions today can lead to exponential growth tomorrow.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">DCA</span>
        <span class="yt-tag">Investing</span>
        <span class="yt-tag">Personal Finance</span>
      </div>
    </div>
  </div>
  <!-- ↓ ADD MORE EPISODES HERE — copy the yt-card block above ↓ -->
</div>

<div class="yt-divider"><div class="yt-divider-line"></div><span class="yt-divider-label">🔨 All Videos</span><div class="yt-divider-line"></div></div>

<div class="yt-series-badge"><span class="yt-series-dot"></span>Ongoing Content</div>

<div class="yt-grid">
  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/PpWRurrKmB0" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">I Worked Hard for My Money… But My Money Wasn't Working for Me Until I Learned This.</p>
        <span class="yt-card-date">Mar 2021</span>
      </div>
      <p class="yt-card-desc">Most people spend years learning how to work for money but never learn how to make money work for them. The difference looks small at first — years later, it changes everything.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">Savings Account</span>
        <span class="yt-tag">Investment Account</span>
        <span class="yt-tag">Money</span>
      </div>
    </div>
  </div>

  <div class="yt-card">
    <div class="yt-embed">
      <iframe src="https://www.youtube.com/embed/eCd8uutKZpw" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="yt-card-body">
      <div class="yt-card-top">
        <p class="yt-card-title">Facial Recognition with Artificial Neural Network and Convolution Neural Network.</p>
        <span class="yt-card-date">Mar 2021</span>
      </div>
      <p class="yt-card-desc">Building a facial recognition biometric system using artificial neural networks and convolutional neural networks — from scratch.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">Deep Learning</span>
        <span class="yt-tag">Python</span>
        <span class="yt-tag">Facial Recognition</span>
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
      <p class="yt-card-desc">Build your own COVID-19 dashboard and track global data in real time — no more checking WHO's website every day.</p>
      <div class="yt-card-tags">
        <span class="yt-tag">HTML</span>
        <span class="yt-tag">APIs</span>
        <span class="yt-tag">Python</span>
        <span class="yt-tag">Django</span>
      </div>
    </div>
  </div>
  <!-- ↓ ADD MORE VIDEOS HERE — copy a yt-card block above ↓ -->
</div>

<div class="yt-cta">
  <h3>New Videos Every Week</h3>
  <div class="yt-cta-divider"></div>
  <p>Every video is built in public — supply chain, personal finance, and AI. No ads, no sponsors, just the work. Subscribe so you don't miss the next one.</p>
  <a href="https://www.youtube.com/@TheNiraj_" class="yt-cta-btn" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    Subscribe on YouTube
  </a>
</div>