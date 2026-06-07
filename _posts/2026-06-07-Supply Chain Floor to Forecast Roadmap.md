---
title: Supply Chain — Floor to Forecast Roadmap
date: 2026-06-07 10:30:00
categories: [Projects]
tags: [supply-chain, forecasting, career, roadmap, warehouse, analytics, immigrants, upskilling]
pin: false
comments: true
---

<style>
.sc-wrapper { font-family: inherit; color: inherit; }

/* ── HERO ── */
.sc-hero { background: linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #0d7377 100%); border-radius: 16px; padding: 48px 36px; text-align: center; margin: 8px 0 40px; position: relative; overflow: hidden; }
.sc-hero::before { content: ""; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); pointer-events: none; }
.sc-hero h2 { color: #fff !important; font-size: 2rem !important; margin: 0 0 12px !important; border: none !important; }
.sc-hero p { color: rgba(255,255,255,0.88); font-size: 1.1rem; margin: 0 0 28px; line-height: 1.65; }
.sc-hero-badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin: 0 4px 8px; }

/* ── STORY BLOCK ── */
.sc-story { background: var(--card-bg); border: 1px solid var(--border-color); border-left: 4px solid #7c3aed; border-radius: 14px; padding: 28px 26px; margin: 0 0 12px; }
.sc-story-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a78bfa; margin: 0 0 14px; }
.sc-story-text { font-size: 0.9rem; color: var(--body-color); line-height: 1.85; margin: 0; }
.sc-story-text strong { color: var(--heading-color); }

/* ── WHO THIS IS FOR ── */
.sc-pillars { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin: 28px 0 40px; }
.sc-card { background: var(--card-bg); border-radius: 14px; border: 1px solid var(--border-color); padding: 22px 20px; transition: box-shadow .2s, transform .2s; }
.sc-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }
.sc-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.sc-card-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
.sc-card-title { font-size: 0.95rem; font-weight: 700; color: var(--heading-color); margin: 0; }
.sc-card-sub { font-size: 0.75rem; color: var(--body-color); margin: 2px 0 0; }
.sc-card-body { font-size: 0.82rem; color: var(--body-color); line-height: 1.6; margin: 0; }

/* ── FLOW ── */
.sc-flow { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0; margin: 36px 0; padding: 28px 16px; background: var(--card-bg); border-radius: 14px; border: 1px solid var(--border-color); }
.sc-flow-step { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 88px; max-width: 100px; padding: 0 4px; }
.sc-flow-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 8px; }
.sc-flow-label { font-size: 0.72rem; font-weight: 600; color: var(--heading-color); line-height: 1.3; }
.sc-flow-sublabel { font-size: 0.65rem; color: var(--body-color); margin-top: 2px; }
.sc-flow-arrow { font-size: 1.3rem; color: var(--body-color); padding: 0 2px; margin-top: -20px; flex-shrink: 0; }
.sc-flow-step:hover .sc-flow-icon { transform: translateY(-3px); transition: transform .2s; }

/* ── PATH / TIMELINE ── */
.sc-path { margin: 28px 0 40px; position: relative; }
.sc-path-line { position: absolute; left: 23px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #7c3aed, #0d7377, #28a745, #fd7e14); border-radius: 2px; }
.sc-path-item { display: flex; gap: 18px; align-items: flex-start; margin-bottom: 24px; position: relative; }
.sc-path-dot { width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 700; z-index: 1; border: 3px solid var(--main-bg); }
.sc-path-content { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px 18px; flex: 1; }
.sc-path-title { font-size: 0.95rem; font-weight: 700; color: var(--heading-color); margin: 0 0 4px; }
.sc-path-desc { font-size: 0.82rem; color: var(--body-color); line-height: 1.55; margin: 0 0 10px; }

/* ── STATS ── */
.sc-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin: 32px 0; }
.sc-stat { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); padding: 18px 16px; text-align: center; }
.sc-stat-num { font-size: 2rem; font-weight: 800; line-height: 1.1; }
.sc-stat-label { font-size: 0.75rem; color: var(--body-color); margin-top: 4px; line-height: 1.4; }

/* ── PROCESS ── */
.sc-process { margin: 28px 0 40px; }
.sc-process-item { display: flex; gap: 16px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 18px 20px; margin-bottom: 12px; }
.sc-process-num { font-size: 0.85rem; font-weight: 800; min-width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #fff; }
.sc-process-title { font-size: 0.9rem; font-weight: 700; color: var(--heading-color); margin: 0 0 5px; }
.sc-process-desc { font-size: 0.8rem; color: var(--body-color); line-height: 1.55; margin: 0; }
.sc-process-kpis { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
.sc-process-kpi { font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; background: var(--sidebar-bg); color: var(--body-color); border: 1px solid var(--border-color); }

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
  .sc-flow { padding: 20px 8px; }
  .sc-flow-step { min-width: 72px; max-width: 84px; }
  .sc-flow-icon { width: 42px; height: 42px; font-size: 1.2rem; }
  .sc-hero { padding: 32px 18px; }
  .sc-hero h2 { font-size: 1.55rem !important; }
}
</style>

<div class="sc-wrapper">

<div class="sc-hero">
  <h2>🏭 Floor to Forecast</h2>
  <p>A clear roadmap for warehouse workers, associates, coordinators, and supervisors to move from daily operations into supply chain analytics — built by someone who made that journey.</p>
  <span class="sc-hero-badge">🏭 Warehousing</span>
  <span class="sc-hero-badge">🛒 Retail</span>
  <span class="sc-hero-badge">🚚 Logistics</span>
  <span class="sc-hero-badge">📊 Analytics</span>
  <span class="sc-hero-badge">🤝 No Gatekeeping</span>
</div>

<div class="sc-story">
  <p class="sc-story-label">Why This Exists</p>
  <p class="sc-story-text">
    I have seen <strong>skilled people — especially immigrants and international students</strong> spend years in warehouses, restaurants, and retail stores, rotating through the same associate roles without ever moving up. The reason is never ambition, motivation, or skills. <strong>It is always the lack of a clear roadmap and the right guidance.</strong><br><br>
    If you have worked in warehousing, logistics, grocery, manufacturing, or transportation, you already understand inventory, operations, quality, and productivity better than most people who entered with direct analyst titles. <strong>That operational knowledge is your edge.</strong> This roadmap is here to help you use it.<br><br>
    I know this because I lived it. And that's the gap I'm here to close.
  </p>
</div>

<div class="sc-divider"><div class="sc-divider-line"></div><span class="sc-divider-label">Who This Is For</span><div class="sc-divider-line"></div></div>

<div class="sc-pillars">
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-purple-soft">🏭</div>
      <div>
        <p class="sc-card-title">Warehouse & Operations</p>
        <p class="sc-card-sub">Associates · Clerks · Operators · Supervisors</p>
      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-teal-soft">🛒</div>
      <div>
        <p class="sc-card-title">Retail & Grocery</p>
        <p class="sc-card-sub">Store Associates · Department Leads · Receivers</p>
      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-orange-soft">🚚</div>
      <div>
        <p class="sc-card-title">Logistics & Transportation</p>
        <p class="sc-card-sub">Drivers · Dispatchers · Coordinators · 3PL Staff</p>
      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-green-soft">🏗️</div>
      <div>
        <p class="sc-card-title">Manufacturing & Production</p>
        <p class="sc-card-sub">Line Workers · Quality Technicians · Planners</p>
      </div>
    </div>
  </div>
  <div class="sc-card">
    <div class="sc-card-header">
      <div class="sc-card-icon bg-purple-soft">🎓</div>
      <div>
        <p class="sc-card-title">Students & Enthusists</p>
        <p class="sc-card-sub">Students · Someone looking for Career Transition ·Early Career</p>
      </div>
    </div>
  </div>
</div>

<div class="sc-divider"><div class="sc-divider-line"></div><span class="sc-divider-label">The Journey — Floor to Forecast</span><div class="sc-divider-line"></div></div>

<div class="sc-flow">
  <div class="sc-flow-step"><div class="sc-flow-icon bg-purple-soft text-purple">🏭</div><div class="sc-flow-label">Floor Role</div><div class="sc-flow-sublabel">Where you are</div></div>
  <div class="sc-flow-arrow">→</div>
  <div class="sc-flow-step"><div class="sc-flow-icon bg-blue-soft text-blue">📊</div><div class="sc-flow-label">Data Foundations</div><div class="sc-flow-sublabel">Excel · SQL</div></div>
  <div class="sc-flow-arrow">→</div>
  <div class="sc-flow-step"><div class="sc-flow-icon bg-teal-soft text-teal">📦</div><div class="sc-flow-label">Supply Chain Analytics</div><div class="sc-flow-sublabel">Inventory · KPIs</div></div>
  <div class="sc-flow-arrow">→</div>
  <div class="sc-flow-step"><div class="sc-flow-icon bg-orange-soft text-orange">🔮</div><div class="sc-flow-label">Demand & Forecasting</div><div class="sc-flow-sublabel">Planning · S&OP</div></div>
  <div class="sc-flow-arrow">→</div>
  <div class="sc-flow-step"><div class="sc-flow-icon bg-green-soft text-green">🚀</div><div class="sc-flow-label">Analyst Role</div><div class="sc-flow-sublabel">Where you're going</div></div>
</div>

> 🔑 **The gap between where you are and where you want to be is not talent. It is a roadmap.** This is that roadmap — built stage by stage, with real projects at every step.

<div class="sc-stats">
  <div class="sc-stat"><div class="sc-stat-num text-purple">4</div><div class="sc-stat-label">Stages from floor worker to supply chain analyst</div></div>
  <div class="sc-stat"><div class="sc-stat-num text-teal">Real</div><div class="sc-stat-label">Projects built at every stage — not just theory</div></div>
  <div class="sc-stat"><div class="sc-stat-num text-orange">Free</div><div class="sc-stat-label">No course to buy. No certification required to start.</div></div>
  <div class="sc-stat"><div class="sc-stat-num text-green">Open</div><div class="sc-stat-label">Everything public on GitHub — fork, follow, build along</div></div>
</div>

<div class="sc-divider"><div class="sc-divider-line"></div><span class="sc-divider-label">📋 Roadmap & Projects</span><div class="sc-divider-line"></div></div>

<!-- YOUR ROADMAP STAGES AND PROJECT CARDS GO HERE -->

<div class="sc-callout bg-purple-soft" style="border-left-color:#7c3aed;">
  <div class="sc-callout-icon">🤝</div>
  <div>
    <div class="sc-callout-title text-purple">This roadmap is being built live — alongside you</div>
    <div class="sc-callout-text" style="color:var(--body-color);">Every project added here maps to a real stage of the journey. I am building this while working in supply chain, not after. If you are a warehouse worker, retail associate, or logistics coordinator trying to figure out where to start — drop a comment. Your question might become the next post.</div>
  </div>
</div>

</div>