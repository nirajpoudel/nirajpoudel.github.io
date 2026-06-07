---
title: Supply Chain Analytics Portfolio
date: 2026-06-07 10:00:00
categories: [Projects]
tags: [supply-chain, analytics, power-bi, sql, excel, inventory, kpi, warehouse]
pin: true
comments: true
---

<style>
.sc-wrapper { font-family: inherit; color: inherit; }

/* ── HERO ── */
.sc-hero { background: linear-gradient(135deg, #0f4c81 0%, #1a6faf 50%, #0d7377 100%); border-radius: 16px; padding: 48px 36px; text-align: center; margin: 8px 0 40px; position: relative; overflow: hidden; }
.sc-hero::before { content: ""; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); pointer-events: none; }
.sc-hero h2 { color: #fff !important; font-size: 2rem !important; margin: 0 0 12px !important; border: none !important; }
.sc-hero p { color: rgba(255,255,255,0.88); font-size: 1.1rem; margin: 0 0 28px; line-height: 1.65; }
.sc-hero-badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin: 0 4px 8px; }

/* ── STORY BLOCK ── */
.sc-story { background: var(--card-bg); border: 1px solid var(--border-color); border-left: 4px solid #1a6faf; border-radius: 14px; padding: 28px 26px; margin: 0 0 12px; }
.sc-story-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #4a9fd4; margin: 0 0 14px; }
.sc-story-text { font-size: 0.9rem; color: var(--body-color); line-height: 1.85; margin: 0; }
.sc-story-text strong { color: var(--heading-color); }

/* ── PILLAR CARDS ── */
.sc-pillars { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin: 28px 0 40px; }
.sc-card { background: var(--card-bg); border-radius: 14px; border: 1px solid var(--border-color); padding: 22px 20px; transition: box-shadow .2s, transform .2s; }
.sc-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }
.sc-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.sc-card-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
.sc-card-title { font-size: 0.95rem; font-weight: 700; color: var(--heading-color); margin: 0; }
.sc-card-sub { font-size: 0.75rem; color: var(--body-color); margin: 2px 0 0; }
.sc-card-body { font-size: 0.82rem; color: var(--body-color); line-height: 1.6; margin: 0 0 14px; }
.sc-tag { display: inline-block; background: var(--sidebar-bg); color: var(--body-color); font-size: 0.68rem; font-weight: 600; padding: 3px 9px; border-radius: 20px; margin: 2px 2px 0 0; border: 1px solid var(--border-color); }

/* ── STATS ── */
.sc-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin: 32px 0; }
.sc-stat { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); padding: 18px 16px; text-align: center; }
.sc-stat-num { font-size: 2rem; font-weight: 800; line-height: 1.1; }
.sc-stat-label { font-size: 0.75rem; color: var(--body-color); margin-top: 4px; line-height: 1.4; }

/* ── TOPICS ── */
.sc-topics { display: flex; flex-wrap: wrap; gap: 10px; margin: 24px 0 36px; }
.sc-topic { display: flex; align-items: center; gap: 7px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 24px; padding: 7px 14px; font-size: 0.8rem; font-weight: 600; color: var(--heading-color); }
.sc-topic-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

/* ── DIVIDER ── */
.sc-divider { display: flex; align-items: center; gap: 14px; margin: 44px 0 24px; }
.sc-divider-line { flex: 1; height: 1px; background: var(--border-color); }
.sc-divider-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--body-color); background: var(--main-bg); padding: 4px 12px; border-radius: 20px; border: 1px solid var(--border-color); }

/* ── CALLOUT ── */
.sc-callout { border-radius: 12px; padding: 18px 20px; margin: 28px 0; border-left: 4px solid; display: flex; gap: 14px; align-items: flex-start; }
.sc-callout-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 1px; }
.sc-callout-title { font-size: 0.9rem; font-weight: 700; margin: 0 0 5px; }
.sc-callout-text { font-size: 0.82rem; line-height: 1.6; margin: 0; }

/* ── COLOUR UTILITIES — light base, dark-mode aware ── */
.bg-blue-soft   { background: rgba(26,111,175,0.12); }
.bg-teal-soft   { background: rgba(13,115,119,0.12); }
.bg-green-soft  { background: rgba(30,126,52,0.12); }
.bg-orange-soft { background: rgba(224,123,0,0.12); }
.bg-red-soft    { background: rgba(192,57,43,0.12); }
.bg-purple-soft { background: rgba(111,66,193,0.12); }
.bg-yellow-soft { background: rgba(229,172,14,0.12); }
.bg-pink-soft   { background: rgba(214,50,153,0.12); }

.text-blue   { color: #4a9fd4; }
.text-teal   { color: #1aadad; }
.text-green  { color: #34a853; }
.text-orange { color: #f59e0b; }
.text-red    { color: #ef4444; }
.text-purple { color: #a78bfa; }

/* ── MOBILE ── */
@media (max-width: 600px) {
  .sc-hero { padding: 32px 18px; }
  .sc-hero h2 { font-size: 1.55rem !important; }
}
</style>

<div class="sc-wrapper">

<div class="sc-hero">
  <h2>📊 Supply Chain Analytics Portfolio</h2>
  <p>Real projects built from real operations — every one of these started as a problem on a floor, not a textbook prompt. Built to show what supply chain analytics actually looks like in practice.</p>
  <span class="sc-hero-badge">📦 EDA</span>
  <span class="sc-hero-badge">🚚 Sales Forecasting</span>
  <span class="sc-hero-badge">📊 Inventory Optimization</span>
  <span class="sc-hero-badge">🗄️ Demand Planning & Forecasting</span>
  <span class="sc-hero-badge">📁 Replenishment Planning</span>
  <span class="sc-hero-badge">📝 Excel</span>
  <span class="sc-hero-badge">🛢 SQL</span>
  <span class="sc-hero-badge"></> Python</span>
  <span class="sc-hero-badge">📊 PowerBI</span>
  <span class="sc-hero-badge">🤖 Machine Learning</span>
  <span class="sc-hero-badge">֎ GenerativeAI</span>
  
</div>

<div class="sc-story">
  <p class="sc-story-label">What This Portfolio Is</p>
  <p class="sc-story-text">
    Most analytics portfolios are built by people who have never touched a pallet, worked a WMS, or made a same-day inventory decision under pressure. <strong>This one is different.</strong><br><br>
    Every project here is grounded in a problem that warehouse workers, coordinators, and operations staff deal with daily — stockouts, receiving backlogs, forecast misses, slow-moving SKUs, carrier delays. The goal is not just to show technical skill. <strong>It is to show that your floor experience is the foundation of great supply chain analytics</strong> — and that anyone in operations can learn to build this.<br><br>
    Each project in this portfolio maps directly to a stage in the <a href="https://nirajpoudel.com/posts/Supply-Chain-Floor-to-Forecast-Roadmap/" style="color:var(--link-color);text-decoration:none;font-weight:600;">Floor to Forecast roadmap ↗</a>. If you are following the roadmap, these are the deliverables.
  </p>
</div>

<div class="sc-divider"><div class="sc-divider-line"></div><span class="sc-divider-label">What You Will Learn From These Projects</span><div class="sc-divider-line"></div></div>

<div class="sc-pillars">
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-teal-soft">📦</div>
      <div>
        <p class="sc-card-title">Explanatory Data Analysis</p>
       
      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-blue-soft">🚚</div>
      <div>
        <p class="sc-card-title">Sales Performance Analysis</p>

      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-orange-soft">🔮</div>
      <div>
        <p class="sc-card-title">Inventory Optimization</p>
       
      </div>
    </div>
    </div>
     <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-orange-soft">🔮</div>
      <div>
        <p class="sc-card-title">Demand Forecasting</p>
        <p class="sc-card-sub">Predicting what the floor will need next</p>
      </div>
    </div>
  </div>


  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-orange-soft">🔮</div>
      <div>
        <p class="sc-card-title">Replenishment Planning</p>
      </div>
    </div>
    </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-purple-soft">📊</div>
      <div>
        <p class="sc-card-title">KPI Dashboards</p>
      </div>
    </div>

  </div>
</div>

<div class="sc-stats">
  <div class="sc-stat"><div class="sc-stat-num text-blue">Real</div><div class="sc-stat-label">Projects covering the full supply chain lifecycle</div></div>
  <div class="sc-stat"><div class="sc-stat-num text-orange">0</div><div class="sc-stat-label">Staged datasets. Every problem came from the floor first.</div></div>
  <div class="sc-stat"><div class="sc-stat-num text-green">Open</div><div class="sc-stat-label">All projects public on GitHub — fork, follow, build along</div></div>
</div>

<div class="sc-divider"><div class="sc-divider-line"></div><span class="sc-divider-label">📁 Projects</span><div class="sc-divider-line"></div></div>

<!-- YOUR PROJECT CARDS GO HERE -->

<div class="sc-callout bg-teal-soft" style="border-left-color:#1aadad;">
  <div class="sc-callout-icon">🤝</div>
  <div>
    <div class="sc-callout-title text-teal">These projects are for you — not just about supply chain</div>
    <div class="sc-callout-text" style="color:var(--body-color);">If you are a warehouse associate, retail receiver, logistics coordinator, or operations supervisor trying to break into analytics — every project here is documented so you can follow along and build it yourself. No CS degree required. No prior analytics experience required. Just the operational knowledge you already have.</div>
  </div>
</div>

</div>