---
icon: fas fa-user
order: 1
---

<style>
/* ─────────────────────────────────────────────
   Chirpy-native About Page — Niraj Poudel
   Uses Chirpy's CSS variables so it inherits
   light/dark mode automatically.
───────────────────────────────────────────── */

/* Typography helpers */
.ab-mono { font-family: 'Source Code Pro', 'JetBrains Mono', ui-monospace, monospace; }

/* ── CONTENT (Chirpy default) ── */
.content {
  font-size: 1.08rem;
  margin-top: 2rem;
  overflow-wrap: break-word;
}

@media all and (min-width: 1200px) {
  .content {
    font-size: 1.03rem;
  }
}

/* ── HERO ── */
.ab-hero {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color, rgba(128,128,128,0.2));
  margin-bottom: 2rem;
}
.ab-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--link-color);
  margin: 0;
}
.ab-name {
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0.15rem 0 0;
  color: var(--heading-color, var(--text-color));
}
.ab-role {
  font-size: 1rem;
  opacity: 0.65;
  margin: 0.2rem 0 0.8rem;
}
.ab-status-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1.2rem;
  font-size: 0.82rem;
  opacity: 0.7;
  margin-bottom: 1rem;
}
.ab-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
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
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none !important;
  border: 1px solid var(--border-color, rgba(128,128,128,0.3));
  color: var(--text-color) !important;
  background: transparent;
  transition: border-color 0.18s, color 0.18s, background 0.18s;
}
.ab-link-btn:hover {
  border-color: var(--link-color);
  color: var(--link-color) !important;
  background: color-mix(in srgb, var(--link-color) 8%, transparent);
}
.ab-link-btn.primary {
  background: var(--link-color);
  border-color: var(--link-color);
  color: #fff !important;
}
.ab-link-btn.primary:hover {
  opacity: 0.88;
}

/* ── SECTION HEADER ── */
.ab-section-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin: 2rem 0 1rem;
}
.ab-section-head h2 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.ab-section-head .ab-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--link-color);
  opacity: 0.85;
}
.ab-rule {
  border: none;
  border-top: 1px solid var(--border-color, rgba(128,128,128,0.2));
  margin: 0 0 0;
}

/* ── TIMELINE (experience) ── */
.ab-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 1.5rem;
}
.ab-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 1px;
  background: var(--border-color, rgba(128,128,128,0.25));
}
.ab-tl-item {
  position: relative;
  padding: 0 0 1.5rem 1.25rem;
}
.ab-tl-item::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 10px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--link-color);
  border: 2px solid var(--main-bg, #1b1b1e);
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
  font-weight: 600;
  margin: 0;
}
.ab-tl-date {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 2px 9px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--link-color) 12%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 25%, transparent);
  white-space: nowrap;
  font-family: 'Source Code Pro', monospace;
}
.ab-tl-item ul {
  margin: 0;
  padding-left: 1.1rem;
}
.ab-tl-item li {
  font-size: 0.875rem;
  opacity: 0.75;
  margin-bottom: 3px;
  line-height: 1.55;
}

/* ── PROJECTS GRID ── */
.ab-proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.85rem;
}
.ab-proj-card {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  padding: 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 0.18s;
}
.ab-proj-card:hover {
  border-color: var(--link-color);
}
.ab-proj-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.ab-proj-name {
  font-size: 0.93rem;
  font-weight: 600;
  margin: 0;
}
.ab-badge {
  font-size: 0.67rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}
.ab-badge-live {
  background: rgba(34,197,94,0.12);
  color: #16a34a;
  border: 1px solid rgba(34,197,94,0.3);
}
.ab-badge-wip {
  background: rgba(234,179,8,0.12);
  color: #a16207;
  border: 1px solid rgba(234,179,8,0.3);
}
.ab-proj-desc {
  font-size: 0.845rem;
  opacity: 0.68;
  line-height: 1.55;
  margin: 0;
  flex: 1;
}
.ab-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.ab-tag {
  font-family: 'Source Code Pro', monospace;
  font-size: 0.67rem;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--link-color) 8%, transparent);
  color: var(--link-color);
  border: 1px solid color-mix(in srgb, var(--link-color) 18%, transparent);
}

/* ── SKILLS ── */
.ab-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.85rem;
}
.ab-skill-group {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  padding: 1rem 1.1rem;
}
.ab-skill-title {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--link-color);
  margin-bottom: 0.65rem;
}
.ab-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.ab-pill {
  font-size: 0.79rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color, rgba(128,128,128,0.25));
  opacity: 0.85;
  transition: border-color 0.15s, opacity 0.15s;
}
.ab-pill:hover {
  border-color: var(--link-color);
  opacity: 1;
}

/* ── CERTS ── */
.ab-certs {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.ab-cert {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  text-decoration: none !important;
  color: var(--text-color) !important;
  transition: border-color 0.18s;
}
.ab-cert:hover {
  border-color: var(--link-color);
}
.ab-cert-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--link-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--link-color) 25%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.ab-cert-info { flex: 1; }
.ab-cert-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 2px;
}
.ab-cert-meta {
  font-size: 0.75rem;
  opacity: 0.55;
  margin: 0;
}
.ab-cert-arrow {
  font-size: 0.8rem;
  color: var(--link-color);
  opacity: 0.7;
}

/* ── FOCUS GRID ── */
.ab-focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.85rem;
}
.ab-focus-card {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  padding: 1rem 1.1rem;
  transition: border-color 0.18s;
}
.ab-focus-card:hover {
  border-color: var(--link-color);
}
.ab-focus-icon { font-size: 1.3rem; margin-bottom: 0.45rem; }
.ab-focus-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 0 4px;
}
.ab-focus-desc {
  font-size: 0.795rem;
  opacity: 0.6;
  line-height: 1.5;
  margin: 0;
}

/* ── PHILOSOPHY ── */
.ab-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.85rem;
}
.ab-principle {
  padding: 0.9rem 1rem 0.9rem 1.1rem;
  border-left: 3px solid var(--link-color);
  border-radius: 0 8px 8px 0;
  background: color-mix(in srgb, var(--link-color) 5%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
  border-right: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--link-color) 12%, transparent);
}
.ab-principle strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--link-color);
  margin-bottom: 3px;
}
.ab-principle p {
  font-size: 0.82rem;
  opacity: 0.68;
  margin: 0;
  line-height: 1.5;
}

/* ── VIDEO GRID ── */
.ab-video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.ab-video-wrap {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 10px;
  overflow: hidden;
}
.ab-video-label {
  padding: 0.55rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 6px;
  border-top: 1px solid var(--border-color, rgba(128,128,128,0.2));
}
.ab-video-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--link-color);
  flex-shrink: 0;
}
.ab-responsive-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.ab-responsive-video iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: none;
}

/* Utility */
.ab-spacer { height: 0.5rem; }
</style>

<div class="ab-hero">
  <!-- <p class="ab-eyebrow">Software Engineer</p>
  <h1 class="ab-name">Niraj Poudel</h1>
  <p class="ab-role">Supply Chain &amp; Personal Finance</p> -->

  <div class="ab-status-row">
    <span><span class="ab-dot"></span>Open to opportunities</span>
    <span>📍 Vancouver Canada</span>
   
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

<div class="ab-section-head">
  <h2>💼 Experience</h2>
  <span class="ab-label">Career</span>
</div>

<div class="ab-timeline">
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Logistics &amp; Operations Coordinator — Cold Storage</p>
      <span class="ab-tl-date">Aug 2025 – Present</span>
    </div>
    <ul>
      <li>Overall: Handle 25+ inbound and 20+ outbound shipments daily, Manage and Optimize Inventory, Forecast demand on ongoing basis. </li>
      <li>Technology used: Microsoft Office (Excel, Word, Outlook), Max Legacy ERP (internal), Power BI, RF Scanners</li>
    </ul>
  </div>
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Software Engineer</p>
      <span class="ab-tl-date">Jan 2025 – Aug 2025</span>
    </div>
    <ul>
      <li>Overall: Developed 3 fully functional systems from scratch, saved around $10,000 per month, used by 35+ employees.</li>
      <li>Technology Used: Python, Flask, Microsoft Azure, SQL, Excel, Power BI, Syncore ERP, OpenAI APIs, Docker. </li>
      
    </ul>
  </div>
  <div class="ab-tl-item">
    <div class="ab-tl-header">
      <p class="ab-tl-role">Hub Supervisor</p>
      <span class="ab-tl-date">Oct 2023 – Jan 2025</span>
    </div>
    <ul>
      <li>Overall: Started with loader/unloader and promoted to hub supervisor, Supported 25000+ daily volume, Trained 30+ team members, troubleshooted 100+ devices. </li>
      <li>Technology Used: Microsoft Office (Word, Excel, Outlook), UPS WorldShip, Symphony WMS, RF scanners</li>
    </ul>
  </div>
</div>

---

<div class="ab-section-head">
  <h2>🚀 Projects</h2>
  <span class="ab-label">Portfolio</span>
</div>

<div class="ab-proj-grid">
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">Multi Search AI Agent</p>
      <span class="ab-badge ab-badge-live">Live</span>
    </div>
    <p class="ab-proj-desc">An AI-powered research assistant built with LangGraph that performs searches across multiple engines, analyzes and synthesizes them into one comprehensive, balanced answer.</p>
    <div class="ab-tags">
      <span class="ab-tag">Python</span>
      <span class="ab-tag">Langchain</span>
      <span class="ab-tag">Langgraph</span>
      <span class="ab-tag">Search Engines</span>
      <span class="ab-tag">AI Agents</span>
    </div>
  </div>
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">Understanding end to end Supply Chain</p>
      <span class="ab-badge ab-badge-wip">Ongoing</span>
    </div>
    <p class="ab-proj-desc"> I am learning the entire flow of goods, starting from raw material sourcing through production to final delivery and customer satisfaction.</p>
    <div class="ab-tags">
      <span class="ab-tag">Sourcing</span>
      <span class="ab-tag">Procurement</span>
      <span class="ab-tag">Manufacturing</span>
      <span class="ab-tag">Inventory</span>
      <span class="ab-tag">Warehousing</span>
      <span class="ab-tag">Distribution</span>
      <span class="ab-tag">Fulfilment</span>
      <span class="ab-tag">Analytics</span>
    </div>
  </div>
  <div class="ab-proj-card">
    <div class="ab-proj-top">
      <p class="ab-proj-name">Experimenting Snowball Effect</p>
      <span class="ab-badge ab-badge-live">Live - Ongoing</span>
    </div>
    <p class="ab-proj-desc"> Experimenting Dollar Cost Averaging (DCA) with $100 every single week, on VFV, QQC and XEQT no matter what the market condition is.</p>
    <div class="ab-tags">
      <span class="ab-tag">Personal Finance</span>
      <span class="ab-tag">Money</span>
      <span class="ab-tag">Investing</span>
      <span class="ab-tag">YouTube</span>
    </div>
  </div>
</div>

---

<div class="ab-section-head">
  <h2>🧠 Skills</h2>
  <span class="ab-label">Toolkit</span>
</div>

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
</div>

---

<div class="ab-section-head">
  <h2>🏆 Certifications</h2>
  <span class="ab-label">Credentials</span>
</div>

<div class="ab-certs">
  <a href="https://coursera.org/verify/your-link" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🏅</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Cloud Digital Leader Certification</p>
      <p class="ab-cert-meta">Google &middot; Nov 2024</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">🏆</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Applied Data Science with Python</p>
      <p class="ab-cert-meta">University of Michigan / Coursera &middot; 2020</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
  <a href="#" class="ab-cert" target="_blank" rel="noopener">
    <div class="ab-cert-icon">📖</div>
    <div class="ab-cert-info">
      <p class="ab-cert-name">Machine Learning with Python</p>
      <p class="ab-cert-meta">Google Cloud / Coursera &middot; 2020</p>
    </div>
    <span class="ab-cert-arrow">↗</span>
  </a>
</div>

---

<div class="ab-section-head">
  <h2>🎯 Current Focus</h2>
  <span class="ab-label">Right Now</span>
</div>

<div class="ab-focus-grid">
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🤖</div>
    <p class="ab-focus-name">Artificial Intelligence</p>
    <p class="ab-focus-desc">Understanding how to leverage AI in supply chain and personal finance.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">🌐</div>
    <p class="ab-focus-name">Supply Chain</p>
    <p class="ab-focus-desc">Understanding end to end process in overall supply chain network.</p>
  </div>
  <div class="ab-focus-card">
    <div class="ab-focus-icon">💵</div>
    <p class="ab-focus-name">Personal Finance / Investing</p>
    <p class="ab-focus-desc">Testing personal finance strategies for long term wealth building.</p>
  </div>
</div>

---

