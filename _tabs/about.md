---
icon: fas fa-user
order: 1
title: About
---

<style>
/* ── About Page — Full dark/light mode via Chirpy CSS variables ── */

.ab-hero-banner {
  background: linear-gradient(135deg, #0a2540 0%, #1a3a5c 55%, #0d7377 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  margin: 8px 0 40px;
  position: relative;
  overflow: hidden;
}
.ab-hero-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}
.ab-hero-banner::after {
  content: "";
  position: absolute;
  top: -40px; right: -40px;
  width: 220px; height: 220px;
  background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.ab-hero-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #10b981;
  border: 1px solid rgba(16,185,129,0.4);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.ab-hero-name {
  color: #fff !important;
  font-size: 2rem !important;
  margin: 0 0 8px !important;
  border: none !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
}
.ab-hero-role {
  color: rgba(255,255,255,0.78);
  font-size: 1rem;
  margin: 0 0 24px;
  line-height: 1.65;
}
.ab-hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1.2rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 22px;
}
.ab-dot {
  display: inline-block;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #22c55e;
  margin-right: 5px;
  animation: ab-blink 2.2s ease-in-out infinite;
}
@keyframes ab-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}
.ab-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.ab-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 15px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none !important;
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff !important;
  background: rgba(255,255,255,0.10);
  transition: border-color 0.18s, background 0.18s;
}
.ab-link-btn:hover {
  border-color: rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.18);
}
.ab-link-btn.primary {
  background: #10b981;
  border-color: #10b981;
}
.ab-link-btn.primary:hover { opacity: 0.88; }

/* ── DIVIDER ── */
.ab-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 44px 0 26px;
}
.ab-divider-line {
  flex: 1;
  height: 1px;
  background: var(--border-color);
}
.ab-divider-label {
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

/* ── TIMELINE ── */
.ab-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 1.5rem;
  margin: 0 0 8px;
}
.ab-timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 10px; bottom: 10px;
  width: 1px;
  background: linear-gradient(to bottom, #1a6faf, #0d7377, #10b981);
}
.ab-tl-item {
  position: relative;
  padding: 0 0 1.5rem 1.25rem;
}
.ab-tl-item::before {
  content: '';
  position: absolute;
  left: -4px; top: 10px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--link-color);
  border: 2px solid var(--main-bg);
  box-shadow: 0 0 0 1px var(--link-color);
}
.ab-tl-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 0.4rem;
}
.ab-tl-role {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0;
}
.ab-tl-date {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--link-color) 15%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 30%, transparent);
  white-space: nowrap;
}
.ab-tl-item ul { margin: 0; padding-left: 1.1rem; }
.ab-tl-item li {
  font-size: 0.82rem;
  color: var(--body-color);
  margin-bottom: 3px;
  line-height: 1.6;
}

/* ── CARDS (projects, focus) ── */
.ab-proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin: 0 0 8px;
}
.ab-proj-card {
  background: var(--card-bg);
  border-radius: 14px;
  border: 1px solid var(--border-color);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: box-shadow .2s, transform .2s;
}
.ab-proj-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.ab-proj-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.ab-proj-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0;
}
.ab-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}
.ab-badge-live {
  background: rgba(34,197,94,0.15);
  color: #22c55e;
  border: 1px solid rgba(34,197,94,0.35);
}
.ab-badge-wip {
  background: rgba(234,179,8,0.15);
  color: #eab308;
  border: 1px solid rgba(234,179,8,0.35);
}
.ab-proj-desc {
  font-size: 0.82rem;
  color: var(--body-color);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}
.ab-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.ab-tag {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: var(--sidebar-bg);
  color: var(--body-color);
  border: 1px solid var(--border-color);
}

/* ── SKILLS ── */
.ab-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin: 0 0 8px;
}
.ab-skill-group {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 20px 18px;
  transition: box-shadow .2s, transform .2s;
}
.ab-skill-group:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.ab-skill-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--link-color);
  margin-bottom: 12px;
}
.ab-pills { display: flex; flex-wrap: wrap; gap: 5px; }
.ab-pill {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  color: var(--body-color);
  background: var(--sidebar-bg);
  transition: border-color 0.15s;
}
.ab-pill:hover { border-color: var(--link-color); }

/* ── CERTS ── */
.ab-certs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 8px;
}
.ab-cert {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  text-decoration: none !important;
  color: var(--text-color) !important;
  transition: box-shadow .2s, transform .2s;
}
.ab-cert:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.ab-cert-icon {
  width: 42px; height: 42px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--link-color) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--link-color) 25%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.ab-cert-info { flex: 1; }
.ab-cert-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0 0 3px;
}
.ab-cert-meta {
  font-size: 0.75rem;
  color: var(--body-color);
  margin: 0;
}
.ab-cert-arrow { font-size: 0.9rem; color: var(--link-color); }

/* ── FOCUS GRID ── */
.ab-focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 18px;
  margin: 0 0 8px;
}
.ab-focus-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 22px 18px;
  transition: box-shadow .2s, transform .2s;
}
.ab-focus-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.ab-focus-icon { font-size: 1.5rem; margin-bottom: 10px; }
.ab-focus-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0 0 6px;
}
.ab-focus-desc {
  font-size: 0.82rem;
  color: var(--body-color);
  line-height: 1.6;
  margin: 0;
}

/* ── CLOSING CTA ── */
.ab-cta {
  background: linear-gradient(135deg, #0a2540 0%, #0d7377 100%);
  border-radius: 14px;
  padding: 36px 28px;
  margin: 44px 0 8px;
  text-align: center;
}
.ab-cta h3 {
  color: #fff !important;
  font-size: 1.2rem !important;
  margin: 0 0 10px !important;
  border: none !important;
}
.ab-cta p {
  color: rgba(255,255,255,0.75);
  font-size: 0.85rem;
  line-height: 1.7;
  margin: 0 0 20px;
}
.ab-cta-divider {
  width: 40px; height: 2px;
  background: #10b981;
  border-radius: 2px;
  margin: 14px auto;
}
.ab-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 20px;
  background: #10b981;
  color: #fff !important;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none !important;
  margin: 0 5px 8px;
  transition: opacity .18s;
}
.ab-cta-btn:hover { opacity: 0.85; }
.ab-cta-btn.outline {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
}

@media (max-width: 600px) {
  .ab-hero-banner { padding: 32px 18px 28px; }
  .ab-hero-name { font-size: 1.55rem !important; }
}
</style>

<div class="ab-hero-banner">
  <span class="ab-hero-eyebrow">Logistics · Software · Finance</span>
  <h2 class="ab-hero-name">👋 Niraj Poudel</h2>
  <p class="ab-hero-role">Supply Chain &amp; Operations · Software Engineer · Personal Finance Experimenter</p>
  <div class="ab-hero-meta">
    <span><span class="ab-dot"></span>Open to opportunities</span>
    <span>📍 Vancouver, Canada</span>
  </div>
  <div class="ab-links">
    <a href="https://www.linkedin.com/feed/" class="ab-link-btn primary">📄 Resume</a>
    <a href="https://github.com/nirajpoudel" class="ab-link-btn" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/mrniraj/" class="ab-link-btn" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      LinkedIn
    </a>
    <a href="https://www.youtube.com/@TheNiraj_" class="ab-link-btn" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      YouTube
    </a>
  </div>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">💼 Experience</span><div class="ab-divider-line"></div></div>

<div class="ab-timeline">
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Logistics &amp; Operations Coordinator — Cold Storage</p>
      <span class="ab-tl-date">Aug 2025 – Present</span>
    </div>
    <ul>
      <li>Handle 25+ inbound and 20+ outbound shipments daily, manage and optimize inventory, forecast demand on an ongoing basis.</li>
      <li>Technology: Microsoft Office (Excel, Word, Outlook), Max Legacy ERP, Power BI, RF Scanners</li>
    </ul>
  </div>
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Software Engineer</p>
      <span class="ab-tl-date">Jan 2025 – Aug 2025</span>
    </div>
    <ul>
      <li>Developed 3 fully functional systems from scratch, saved ~$10,000/month, used by 35+ employees.</li>
      <li>Technology: Python, Flask, Microsoft Azure, SQL, Excel, Power BI, Syncore ERP, OpenAI APIs, Docker</li>
    </ul>
  </div>
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Hub Supervisor</p>
      <span class="ab-tl-date">Oct 2023 – Jan 2025</span>
    </div>
    <ul>
      <li>Promoted from loader/unloader to hub supervisor, supported 25,000+ daily volume, trained 30+ team members, troubleshot 100+ devices.</li>
      <li>Technology: Microsoft Office, UPS WorldShip, Symphony WMS, RF Scanners</li>
    </ul>
  </div>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🚀 Projects</span><div class="ab-divider-line"></div></div>

<div class="ab-proj-grid">
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">Multi Search AI Agent</p>
      <span class="ab-badge ab-badge-live">Live</span>
    </div>
    <p class="ab-proj-desc">An AI-powered research assistant built with LangGraph that searches across multiple engines and synthesizes results into one balanced answer.</p>
    <div class="ab-tags">
      <span class="ab-tag">Python</span>
      <span class="ab-tag">Langchain</span>
      <span class="ab-tag">Langgraph</span>
      <span class="ab-tag">AI Agents</span>
    </div>
  </div>
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">End-to-End Supply Chain</p>
      <span class="ab-badge ab-badge-wip">Ongoing</span>
    </div>
    <p class="ab-proj-desc">Learning the entire flow of goods — from raw material sourcing through production to final delivery. Written from the execution trenches with Canadian market context.</p>
    <div class="ab-tags">
      <span class="ab-tag">Sourcing</span>
      <span class="ab-tag">Procurement</span>
      <span class="ab-tag">Warehousing</span>
      <span class="ab-tag">Distribution</span>
      <span class="ab-tag">Analytics</span>
    </div>
  </div>
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">Experimenting Snowball Effect</p>
      <span class="ab-badge ab-badge-live">Live – Ongoing</span>
    </div>
    <p class="ab-proj-desc">Dollar Cost Averaging $100 every week into VFV, QQC and XEQT — no matter what the market does. Fully transparent, updated monthly.</p>
    <div class="ab-tags">
      <span class="ab-tag">Personal Finance</span>
      <span class="ab-tag">Investing</span>
      <span class="ab-tag">DCA</span>
      <span class="ab-tag">ETFs</span>
    </div>
  </div>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🧠 Skills</span><div class="ab-divider-line"></div></div>

<div class="ab-skills-grid">
  <div class="ab-skill-group">
    <div class="ab-skill-title">Languages &amp; Data</div>
    <div class="ab-pills">
      <span class="ab-pill">Python</span>
      <span class="ab-pill">SQL</span>
      <span class="ab-pill">Excel</span>
      <span class="ab-pill">pandas</span>
      <span class="ab-pill">NumPy</span>
    </div>
  </div>
  <div class="ab-skill-group">
    <div class="ab-skill-title">Systems &amp; APIs</div>
    <div class="ab-pills">
      <span class="ab-pill">FastAPI</span>
      <span class="ab-pill">REST APIs</span>
      <span class="ab-pill">PostgreSQL</span>
      <span class="ab-pill">Git</span>
      <span class="ab-pill">ERP</span>
    </div>
  </div>
  <div class="ab-skill-group">
    <div class="ab-skill-title">Analytics &amp; Viz</div>
    <div class="ab-pills">
      <span class="ab-pill">Power BI</span>
      <span class="ab-pill">Plotly</span>
      <span class="ab-pill">Matplotlib</span>
      <span class="ab-pill">Excel</span>
    </div>
  </div>
  <div class="ab-skill-group">
    <div class="ab-skill-title">Supply Chain</div>
    <div class="ab-pills">
      <span class="ab-pill">Inventory Mgmt</span>
      <span class="ab-pill">Demand Forecasting</span>
      <span class="ab-pill">WMS</span>
      <span class="ab-pill">Logistics</span>
    </div>
  </div>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🏆 Certifications</span><div class="ab-divider-line"></div></div>

<div class="ab-certs">
  <a href="https://coursera.org/verify/your-link" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🏅</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Cloud Digital Leader Certification</p>
      <p class="ab-cert-meta">Google · Nov 2024</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🏆</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Applied Data Science with Python</p>
      <p class="ab-cert-meta">University of Michigan / Coursera · 2020</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">📖</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Machine Learning with Python</p>
      <p class="ab-cert-meta">Google Cloud / Coursera · 2020</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🎯 Current Focus</span><div class="ab-divider-line"></div></div>

<div class="ab-focus-grid">
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🤖</div>
    <p class="ab-focus-name">Artificial Intelligence</p>
    <p class="ab-focus-desc">Understanding how to leverage AI in supply chain and personal finance.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🌐</div>
    <p class="ab-focus-name">Supply Chain</p>
    <p class="ab-focus-desc">Understanding the end-to-end process across the entire supply chain network.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">💵</div>
    <p class="ab-focus-name">Personal Finance</p>
    <p class="ab-focus-desc">Testing personal finance strategies for long-term wealth building.</p>
  </div>
</div>

<div class="ab-cta">
  <h3>Let's Connect</h3>
  <div class="ab-cta-divider"></div>
  <p>I write about supply chain execution and personal finance from the ground up — no fluff, no gatekeeping. If any of this resonates, let's talk.</p>
  <a href="https://www.linkedin.com/in/mrniraj/" class="ab-cta-btn" target="_blank" rel="noopener">Connect on LinkedIn ↗</a>
  <a href="https://www.youtube.com/@TheNiraj_" class="ab-cta-btn outline" target="_blank" rel="noopener">Watch on YouTube ↗</a>
</div>