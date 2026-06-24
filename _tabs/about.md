---
icon: fas fa-user
order: 1
title: About
---

<style>
/* ── About Page — Brand aligned with the site palette ── */

.ab-hero-banner {
  background: linear-gradient(135deg, #EE460F 0%, #FF5A1F 55%, #D63D0C 100%);
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
  background: radial-gradient(circle, rgba(243,243,243,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.ab-hero-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #F3F3F3;
  border: 1px solid rgba(243,243,243,0.24);
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
  background: #F3F3F3;
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
  background: rgba(243,243,243,0.14);
  border-color: rgba(243,243,243,0.28);
}
.ab-link-btn.primary:hover { opacity: 0.88; }

/* ── MISSION BANNER ── */
.ab-mission {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-left: 4px solid #EE460F;
  border-radius: 14px;
  padding: 24px 24px 20px;
  margin: 0 0 8px;
}
.ab-mission-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FF5A1F;
  margin: 0 0 10px;
}
.ab-mission-text {
  font-size: 0.88rem;
  color: var(--body-color);
  line-height: 1.75;
  margin: 0;
}
.ab-mission-text strong {
  color: var(--heading-color);
}

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
  background: linear-gradient(to bottom, #EE460F, #FF5A1F, #D63D0C);
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
  margin-bottom: 0.2rem;
}
.ab-tl-role {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0;
}
.ab-tl-company {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--link-color);
  margin: 0 0 0.4rem;
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
  background: rgba(238,70,15,0.14);
  color: #EE460F;
  border: 1px solid rgba(238,70,15,0.26);
}
.ab-badge-wip {
  background: rgba(255,90,31,0.14);
  color: #FF5A1F;
  border: 1px solid rgba(255,90,31,0.26);
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

/* ── EDUCATION ── */
.ab-edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 0 0 8px;
}
.ab-edu-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 20px 20px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: box-shadow .2s, transform .2s;
}
.ab-edu-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
.ab-edu-icon {
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
.ab-edu-info { flex: 1; }
.ab-edu-degree {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--heading-color);
  margin: 0 0 3px;
}
.ab-edu-school {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--link-color);
  margin: 0 0 3px;
}
.ab-edu-meta {
  font-size: 0.75rem;
  color: var(--body-color);
  margin: 0;
}
.ab-edu-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(255,90,31,0.14);
  color: #FF5A1F;
  border: 1px solid rgba(255,90,31,0.26);
  margin-top: 6px;
}

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
  background: linear-gradient(135deg, #EE460F 0%, #D63D0C 100%);
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
  background: #FF5A1F;
  border-radius: 2px;
  margin: 14px auto;
}
.ab-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 20px;
  background: #FF5A1F;
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
  background: rgba(243,243,243,0.12);
  border: 1px solid rgba(255,255,255,0.3);
}

@media (max-width: 600px) {
  .ab-hero-banner { padding: 32px 18px 28px; }
  .ab-hero-name { font-size: 1.55rem !important; }
}
</style>

<div class="ab-hero-banner">
  <span class="ab-hero-eyebrow">Supply Chain · Data & AI · Content Creation</span>
  <h2 class="ab-hero-name">👋 Niraj Poudel</h2>
  <p class="ab-hero-role">Supply Chain Analyst · Data, AI & Supply Chain Content Creator<br>Helping Associates Break Into Modern Supply Chain</p>
  <div class="ab-hero-meta">
    <span><span class="ab-dot"></span>Open to opportunities</span>
    <span>📍 Vancouver, Canada</span>
  </div>
  <div class="ab-links">
    <a href="https://github.com/nirajpoudel/nirajpoudel.github.io/blob/main/assets/Niraj.pdf" class="ab-link-btn primary" target="_blank" rel="noopener">📄 Resume</a>
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

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🎯 Mission</span><div class="ab-divider-line"></div></div>

<div class="ab-mission">
  <p class="ab-mission-title">What I Do </p>
  <p class="ab-mission-text">
    I help <strong>associates, clerks, operators, line workers, supervisors and coordinators</strong> in warehousing, retail, grocery, logistics, transportation and manufacturing connect their daily work with <strong>data, AI and modern supply chain</strong>.<br><br>
  </p>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">💼 Experience</span><div class="ab-divider-line"></div></div>

<div class="ab-timeline">
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Supply Chain &amp; Operations Analyst</p>
      <span class="ab-tl-date">Aug 2025 – Present</span>
    </div>
    <p class="ab-tl-company">CCS · Surrey, BC</p>
    <ul>
    </ul>
  </div>



  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Software Engineer -  Data & Operations</p>
      <span class="ab-tl-date">Jan 2025 – Dec 2025</span>
    </div>
    <p class="ab-tl-company">Key Innovations Inc. · Surrey, BC</p>
    <ul>
    </ul>
  </div>


  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Hub Supervisor</p>
      <span class="ab-tl-date">Oct 2023 – Jan 2025</span>
    </div>
    <p class="ab-tl-company">UPS · Richmond, BC</p>
    <ul>
    </ul>
  </div>

</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🚀 Projects</span><div class="ab-divider-line"></div></div>

<div class="ab-proj-card">
  <div class="ab-proj-top">
    <p class="ab-proj-name">Supply-Chain-Analytics-Portfolio</p>
    <span class="ab-badge ab-badge-live">Live</span>
  </div>
  <p class="ab-proj-desc">A collection of supply chain analytics projects focused on inventory management, logistics performance, warehouse operations, KPI tracking, and business intelligence reporting using modern analytics tools.</p>
  <div class="ab-tags">
    <span class="ab-tag">Power BI</span>
    <span class="ab-tag">SQL</span>
    <span class="ab-tag">Excel</span>
    <span class="ab-tag">Supply Chain</span>
    <span class="ab-tag">Analytics</span>
  </div>
  <a href="https://github.com/nirajpoudel/Supply-Chain-Analytics-Portfolio" target="_blank" rel="noopener" style="font-size:0.75rem;color:var(--link-color);text-decoration:none;margin-top:4px;">View on GitHub ↗</a>
</div>

<div class="ab-proj-card">
  <div class="ab-proj-top">
    <p class="ab-proj-name">Supply-Chain-Floor-to-Forecast</p>
    <span class="ab-badge ab-badge-live">Live</span>
  </div>
  <p class="ab-proj-desc">An end-to-end supply chain analytics project that transforms operational warehouse data into actionable insights through inventory analysis, forecasting, KPI monitoring, and executive dashboards.</p>
  <div class="ab-tags">
    <span class="ab-tag">Power BI</span>
    <span class="ab-tag">Forecasting</span>
    <span class="ab-tag">Supply Chain</span>
    <span class="ab-tag">Excel</span>
    <span class="ab-tag">Dashboard</span>
  </div>
  <a href="https://github.com/nirajpoudel/Supply-Chain-Floor-to-Forecast" target="_blank" rel="noopener" style="font-size:0.75rem;color:var(--link-color);text-decoration:none;margin-top:4px;">View on GitHub ↗</a>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🧠 Skills</span><div class="ab-divider-line"></div></div>

<div class="ab-skills-grid">
  <div class="ab-skill-group">
    <div class="ab-skill-title">Data & Analytics</div>
    <div class="ab-pills">
      <span class="ab-pill">Python</span>
      <span class="ab-pill">SQL</span>
      <span class="ab-pill">Excel</span>
      <span class="ab-pill">Power BI</span>
      <span class="ab-pill">Pandas</span>
      <span class="ab-pill">NumPy</span>
      <span class="ab-pill">Matplotlib</span>
      <span class="ab-pill">PostgreSQL</span>
    </div>
  </div>

  <div class="ab-skill-group">
    <div class="ab-skill-title">AI & Development</div>
    <div class="ab-pills">
      <span class="ab-pill">GenAI</span>
      <span class="ab-pill">Scikit-Learn</span>
      <span class="ab-pill">Flask</span>
      <span class="ab-pill">REST APIs</span>
      <span class="ab-pill">Docker</span>
      <span class="ab-pill">Git</span>
      <span class="ab-pill">Microsoft Azure</span>
    </div>
  </div>

  <div class="ab-skill-group">
    <div class="ab-skill-title">Supply Chain & Operations</div>
    <div class="ab-pills">
      <span class="ab-pill">Inventory Management</span>
      <span class="ab-pill">Demand Forecasting</span>
      <span class="ab-pill">S&amp;OP</span>
      <span class="ab-pill">Logistics</span>
      <span class="ab-pill">WMS</span>
      <span class="ab-pill">ERP Systems</span>
    </div>
  </div>
</div>
<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🎓 Education</span><div class="ab-divider-line"></div></div>

<div class="ab-edu-grid">
  <div class="ab-edu-card">
    <div class="ab-edu-icon">🎓</div>
    <div class="ab-edu-info">
      <p class="ab-edu-degree">Post Baccalaureate — Technical Management &amp; Services</p>
      <p class="ab-edu-school">Kwantlen Polytechnic University</p>
      <p class="ab-edu-meta">May 2024 – Aug 2025</p>
      <span class="ab-edu-badge">🏆 Dean's Honour Roll 2025</span>
    </div>
  </div>
  <div class="ab-edu-card">
    <div class="ab-edu-icon">💻</div>
    <div class="ab-edu-info">
      <p class="ab-edu-degree">BSc Hons. Computer Science &amp; Software Engineering</p>
      <p class="ab-edu-school">University of Bedfordshire</p>
      <p class="ab-edu-meta">Sep 2019 - Aug 2022</p>
    </div>
  </div>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🏆 Certifications</span><div class="ab-divider-line"></div></div>

<div class="ab-certs">
<a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🚚</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Supply Chain — Demand Planning, Forecasting and S&amp;OP</p>
      <p class="ab-cert-meta">Udemy</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">☁️</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Cloud Digital Leader Certification</p>
      <p class="ab-cert-meta">Google Cloud</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🏆</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Applied Data Science</p>
      <p class="ab-cert-meta">University of Michigan / Coursera</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🤖</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Machine Learning</p>
      <p class="ab-cert-meta">Coursera</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
</div>

<div class="ab-divider"><div class="ab-divider-line"></div><span class="ab-divider-label">🎯 Current Focus</span><div class="ab-divider-line"></div></div>

<div class="ab-focus-grid">
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🤖</div>
    <p class="ab-focus-name">Data &amp; AI in Supply Chain</p>
    <p class="ab-focus-desc">Teaching Excel, SQL, Power BI, Python and APIs to analyze sales trends, optimize inventory, forecast demand and plan replenishment.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🌐</div>
    <p class="ab-focus-name">Modern Supply Chain</p>
    <p class="ab-focus-desc">Connecting end-to-end supply chain execution with ERP systems, cloud platforms, machine learning and generative AI.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🧭</div>
    <p class="ab-focus-name">Career Roadmapping</p>
    <p class="ab-focus-desc">Helping warehouse workers, retail associates and logistics coordinators build a clear path into analyst and modern supply chain roles.</p>
  </div>
</div>

<div class="ab-cta">
  <h3>Let's Connect</h3>
  <div class="ab-cta-divider"></div>
  <p>I write about supply chain execution, data and AI — from the ground up, no fluff, no gatekeeping. If you're in warehousing, retail, logistics or manufacturing and want to level up, let's talk.</p>
  <a href="https://www.linkedin.com/in/mrniraj/" class="ab-cta-btn" target="_blank" rel="noopener">Connect on LinkedIn ↗</a>
  <a href="https://www.youtube.com/@TheNiraj_" class="ab-cta-btn outline" target="_blank" rel="noopener">Watch on YouTube ↗</a>
  <a href="mailto:njxpdl@gmail.com" class="ab-cta-btn outline">Free Consultation ↗</a>
</div>