---
title: Experimenting Snowball Effect
date: 2026-04-11 10:50:25
categories: [Personal Finance, Snowball Effect]
tags: [personalfinance]
pin: true
comments: true
---

<style>
.pf-wrapper { font-family: inherit; color: inherit; }

/* ── HERO ── */
.pf-hero { background: linear-gradient(135deg, #0a2540 0%, #1a3a5c 55%, #0f5132 100%); border-radius: 16px; padding: 52px 36px 44px; margin: 8px 0 44px; position: relative; overflow: hidden; }
.pf-hero::after { content: ""; position: absolute; top: -40px; right: -40px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%); pointer-events: none; }
.pf-hero-eyebrow { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #10b981; border: 1px solid rgba(16,185,129,0.4); padding: 4px 14px; border-radius: 20px; margin-bottom: 18px; }
.pf-hero h2 { color: #fff !important; font-size: 2rem !important; margin: 0 0 16px !important; border: none !important; line-height: 1.25 !important; }
.pf-hero p { color: rgba(255,255,255,0.78); font-size: 1rem; margin: 0 0 28px; line-height: 1.7; max-width: 640px; }
.pf-hero-stats { display: flex; flex-wrap: wrap; gap: 12px; }
.pf-hero-stat { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; padding: 12px 18px; }
.pf-hero-stat-num { font-size: 1.4rem; font-weight: 800; color: #10b981; line-height: 1; }
.pf-hero-stat-label { font-size: 0.7rem; color: rgba(255,255,255,0.6); margin-top: 3px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }

/* ── MANIFESTO ── */
.pf-manifesto { border-left: 3px solid #10b981; padding: 20px 24px; margin: 32px 0 40px; background: var(--card-bg); border-radius: 0 12px 12px 0; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); }
.pf-manifesto p { font-size: 0.92rem; line-height: 1.75; margin: 0 0 12px; color: var(--body-color); }
.pf-manifesto p:last-child { margin: 0; }
.pf-manifesto strong { color: var(--heading-color); }

/* ── DIVIDER ── */
.pf-divider { display: flex; align-items: center; gap: 14px; margin: 44px 0 26px; }
.pf-divider-line { flex: 1; height: 1px; background: var(--border-color); }
.pf-divider-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--body-color); background: var(--main-bg); padding: 4px 14px; border-radius: 20px; border: 1px solid var(--border-color); white-space: nowrap; }

/* ── DCA GRID ── */
.pf-dca-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0 36px; }
.pf-dca-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 14px; padding: 20px 18px; transition: box-shadow .2s, transform .2s; }
.pf-dca-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }
.pf-dca-icon { font-size: 1.6rem; margin-bottom: 10px; }
.pf-dca-title { font-size: 0.88rem; font-weight: 700; color: var(--heading-color); margin-bottom: 6px; }
.pf-dca-desc { font-size: 0.78rem; color: var(--body-color); line-height: 1.6; margin: 0; }
.pf-dca-highlight { background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); }
.pf-dca-highlight .pf-dca-title { color: #10b981; }

/* ── CONTRIBUTION BARS ── */
.pf-contrib { margin: 28px 0 40px; }
.pf-contrib-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.pf-contrib-year { font-size: 0.75rem; font-weight: 700; color: var(--body-color); min-width: 38px; }
.pf-contrib-bar-wrap { flex: 1; background: var(--sidebar-bg); border-radius: 6px; height: 28px; overflow: hidden; position: relative; }
.pf-contrib-bar { height: 100%; border-radius: 6px; display: flex; align-items: center; padding-left: 10px; transition: width 0.6s ease; }
.pf-contrib-bar-label { font-size: 0.7rem; font-weight: 700; color: #fff; white-space: nowrap; }
.pf-contrib-total { font-size: 0.75rem; font-weight: 700; color: var(--heading-color); min-width: 64px; text-align: right; }

/* ── PORTFOLIO ── */
.pf-portfolio { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0 36px; }
.pf-etf { border-radius: 14px; border: 1px solid var(--border-color); padding: 22px 18px; position: relative; overflow: hidden; background: var(--card-bg); transition: box-shadow .2s, transform .2s; }
.pf-etf:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.15); transform: translateY(-2px); }
.pf-etf::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px; border-radius: 14px 14px 0 0; }
.pf-etf-vfv::before { background: #1a6faf; }
.pf-etf-qqc::before { background: #6f42c1; }
.pf-etf-xeqt::before { background: #0d7377; }
.pf-etf-ticker { font-size: 1.3rem; font-weight: 900; letter-spacing: 0.02em; margin-bottom: 2px; }
.pf-etf-vfv .pf-etf-ticker { color: #4a9fd4; }
.pf-etf-qqc .pf-etf-ticker { color: #a78bfa; }
.pf-etf-xeqt .pf-etf-ticker { color: #1aadad; }
.pf-etf-alloc { font-size: 2.2rem; font-weight: 800; line-height: 1.1; color: var(--heading-color); margin: 8px 0 6px; }
.pf-etf-name { font-size: 0.72rem; font-weight: 600; color: var(--body-color); margin-bottom: 12px; line-height: 1.4; }
.pf-etf-desc { font-size: 0.78rem; color: var(--body-color); line-height: 1.6; }
.pf-etf-badge { display: inline-block; font-size: 0.64rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; margin-top: 10px; }
.pf-etf-vfv .pf-etf-badge { background: rgba(74,159,212,0.15); color: #4a9fd4; border: 1px solid rgba(74,159,212,0.3); }
.pf-etf-qqc .pf-etf-badge { background: rgba(167,139,250,0.15); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3); }
.pf-etf-xeqt .pf-etf-badge { background: rgba(26,173,173,0.15); color: #1aadad; border: 1px solid rgba(26,173,173,0.3); }

/* ── ALLOCATION BAR ── */
.pf-alloc-bar { display: flex; border-radius: 10px; overflow: hidden; height: 14px; margin: 24px 0 10px; }
.pf-alloc-seg { display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; color: rgba(255,255,255,0.9); }
.pf-alloc-legend { display: flex; gap: 18px; flex-wrap: wrap; margin-bottom: 32px; }
.pf-alloc-leg-item { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 600; color: var(--body-color); }
.pf-alloc-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }

/* ── RISK NOTE ── */
.pf-risk { border-radius: 12px; padding: 20px 22px; margin: 36px 0; border: 1px solid rgba(245,158,11,0.35); background: rgba(245,158,11,0.08); display: flex; gap: 14px; }
.pf-risk-icon { font-size: 1.4rem; flex-shrink: 0; }
.pf-risk-title { font-size: 0.9rem; font-weight: 700; color: #f59e0b; margin-bottom: 8px; }
.pf-risk-text { font-size: 0.8rem; line-height: 1.65; color: var(--body-color); margin: 0; }

/* ── TRACKER ── */
.pf-tracker { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 14px; overflow: hidden; margin: 24px 0 36px; }
.pf-tracker-header { padding: 16px 20px; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; }
.pf-tracker-title { font-size: 0.9rem; font-weight: 700; color: var(--heading-color); margin: 0; }
.pf-tracker-badge { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; background: rgba(16,185,129,0.15); color: #10b981; padding: 3px 10px; border-radius: 20px; border: 1px solid rgba(16,185,129,0.3); }
.pf-tracker table { width: 100%; border-collapse: collapse; margin: 0; font-size: 0.82rem; }
.pf-tracker th { padding: 10px 16px; text-align: left; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--body-color); border-bottom: 1px solid var(--border-color); background: var(--sidebar-bg); }
.pf-tracker td { padding: 12px 16px; border-bottom: 1px solid var(--border-color); color: var(--body-color); }
.pf-tracker tr:last-child td { border-bottom: none; }
.pf-tracker .empty-row td { text-align: center; color: var(--body-color); font-style: italic; padding: 32px 16px; font-size: 0.8rem; opacity: 0.6; }
.pf-gain-pos { color: #10b981; font-weight: 700; }
.pf-gain-neg { color: #ef4444; font-weight: 700; }
.pf-gain-flat { color: var(--body-color); }

/* ── VIDEO ── */
.pf-video-wrap { border-radius: 14px; overflow: hidden; border: 1px solid var(--border-color); margin: 24px 0 36px; background: var(--card-bg); }
.pf-video-header { padding: 14px 18px; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 10px; }
.pf-video-dot { width: 10px; height: 10px; border-radius: 50%; background: #ef4444; }
.pf-video-title { font-size: 0.8rem; font-weight: 600; color: var(--heading-color); }

/* ── PROMISE ── */
.pf-promise { background: linear-gradient(135deg, #0a2540 0%, #0f5132 100%); border-radius: 14px; padding: 32px 28px; margin: 36px 0 8px; text-align: center; }
.pf-promise h3 { color: #fff !important; font-size: 1.2rem !important; margin: 0 0 10px !important; border: none !important; }
.pf-promise p { color: rgba(255,255,255,0.75); font-size: 0.85rem; line-height: 1.7; margin: 0; }
.pf-promise-divider { width: 40px; height: 2px; background: #10b981; border-radius: 2px; margin: 14px auto; }

@media (max-width: 600px) {
  .pf-hero { padding: 32px 18px 28px; }
  .pf-hero h2 { font-size: 1.55rem !important; }
}
</style>

<div class="pf-wrapper">

<div class="pf-hero">
  <div class="pf-hero-eyebrow">📈 Personal Finance Experiment</div>
  <h2>The Snowball Effect<br>$1 → $1,000,000</h2>
  <p>A fully transparent, long-term investing experiment. Every dollar tracked. Every month updated. No gatekeeping.</p>
  <div class="pf-hero-stats">
    <div class="pf-hero-stat">
      <div class="pf-hero-stat-num">$100</div>
      <div class="pf-hero-stat-label">Per Week</div>
    </div>
    <div class="pf-hero-stat">
      <div class="pf-hero-stat-num">+10%</div>
      <div class="pf-hero-stat-label">Annual Increase</div>
    </div>
    <div class="pf-hero-stat">
      <div class="pf-hero-stat-num">3 ETFs</div>
      <div class="pf-hero-stat-label">VFV · QQC · XEQT</div>
    </div>
    <div class="pf-hero-stat">
      <div class="pf-hero-stat-num">10 Yrs</div>
      <div class="pf-hero-stat-label">Experiment Duration</div>
    </div>
  </div>
</div>

<div class="pf-manifesto">
  <p>Most personal finance content is either <strong>too vague to be useful</strong> or written by someone trying to sell you something. This is neither.</p>
  <p>This is a <strong>real experiment</strong>, with real money, documented in public — contribution by contribution, month by month, for 10 years. The goal isn't to get rich quick. The goal is to prove that <strong>consistency beats everything</strong>.</p>
  <p>If it works, you'll see it. If it underperforms, you'll see that too.</p>
</div>

<div class="pf-divider"><div class="pf-divider-line"></div><span class="pf-divider-label">The Strategy — Dollar Cost Averaging</span><div class="pf-divider-line"></div></div>

<div class="pf-dca-grid">
  <div class="pf-dca-card pf-dca-highlight">
    <div class="pf-dca-icon">📅</div>
    <div class="pf-dca-title">Every Single Week</div>
    <div class="pf-dca-desc">$100 invested every week, no matter what the market does. Up, down, sideways — the contribution goes in.</div>
  </div>
  <div class="pf-dca-card">
    <div class="pf-dca-icon">📈</div>
    <div class="pf-dca-title">+10% Each Year</div>
    <div class="pf-dca-desc">Contributions increase by 10% annually to keep pace with inflation and accelerate compounding in the back half.</div>
  </div>
  <div class="pf-dca-card">
    <div class="pf-dca-icon">🔄</div>
    <div class="pf-dca-title">No Market Timing</div>
    <div class="pf-dca-desc">DCA removes the temptation to time the market. You buy more when prices are low, less when they're high — automatically.</div>
  </div>
  <div class="pf-dca-card">
    <div class="pf-dca-icon">🌱</div>
    <div class="pf-dca-title">Compounding Does the Work</div>
    <div class="pf-dca-desc">The real power shows up in years 7–10. Early consistency is what makes the back half explosive.</div>
  </div>
</div>

<div class="pf-divider"><div class="pf-divider-line"></div><span class="pf-divider-label">Contribution Schedule — 2026 to 2036</span><div class="pf-divider-line"></div></div>

<div class="pf-contrib">

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2026</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:38%;background:linear-gradient(90deg,#1a6faf,#2196f3);"><span class="pf-contrib-bar-label">$100/wk</span></div></div>
    <span class="pf-contrib-total">$5,200</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2027</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:42%;background:linear-gradient(90deg,#1a6faf,#1e88e5);"><span class="pf-contrib-bar-label">$110/wk</span></div></div>
    <span class="pf-contrib-total">$5,720</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2028</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:46%;background:linear-gradient(90deg,#1565c0,#1e88e5);"><span class="pf-contrib-bar-label">$121/wk</span></div></div>
    <span class="pf-contrib-total">$6,292</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2029</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:51%;background:linear-gradient(90deg,#0d7377,#1aadad);"><span class="pf-contrib-bar-label">$133/wk</span></div></div>
    <span class="pf-contrib-total">$6,916</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2030</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:56%;background:linear-gradient(90deg,#2e7d32,#43a047);"><span class="pf-contrib-bar-label">$146/wk</span></div></div>
    <span class="pf-contrib-total">$7,592</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2031</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:62%;background:linear-gradient(90deg,#2e7d32,#4caf50);"><span class="pf-contrib-bar-label">$161/wk</span></div></div>
    <span class="pf-contrib-total">$8,372</span>
  </div>

  <div class="pf-contrib-row">
    <span class="pf-contrib-year">2036</span>
    <div class="pf-contrib-bar-wrap"><div class="pf-contrib-bar" style="width:100%;background:linear-gradient(90deg,#10b981,#059669);"><span class="pf-contrib-bar-label">$259/wk · Peak Year</span></div></div>
    <span class="pf-contrib-total">$13,468</span>
  </div>

</div>

> 💡 The 10% annual increase serves two purposes: it keeps pace with inflation so I'm not quietly investing *less* in real terms each year — and it dramatically accelerates the compounding effect in the back half of the experiment.

<div class="pf-divider"><div class="pf-divider-line"></div><span class="pf-divider-label">The Portfolio — What I'm Actually Buying</span><div class="pf-divider-line"></div></div>

<div class="pf-alloc-bar">
  <div class="pf-alloc-seg" style="width:50%;background:#1a6faf;">VFV 50%</div>
  <div class="pf-alloc-seg" style="width:30%;background:#6f42c1;">QQC 30%</div>
  <div class="pf-alloc-seg" style="width:20%;background:#0d7377;">XEQT 20%</div>
</div>
<div class="pf-alloc-legend">
  <span class="pf-alloc-leg-item"><span class="pf-alloc-dot" style="background:#1a6faf;"></span>VFV — S&P 500 Foundation</span>
  <span class="pf-alloc-leg-item"><span class="pf-alloc-dot" style="background:#6f42c1;"></span>QQC — NASDAQ 100 Growth Tilt</span>
  <span class="pf-alloc-leg-item"><span class="pf-alloc-dot" style="background:#0d7377;"></span>XEQT — Global Diversification</span>
</div>

<div class="pf-portfolio">

  <div class="pf-etf pf-etf-vfv">
    <div class="pf-etf-ticker">VFV</div>
    <div class="pf-etf-alloc">50%</div>
    <div class="pf-etf-name">Vanguard S&P 500 Index ETF</div>
    <div class="pf-etf-desc">The 500 largest US companies. The most studied index in the world. Over any 20-year rolling period in history, it has never produced a negative return.</div>
    <span class="pf-etf-badge">🏛️ Foundation</span>
  </div>

  <div class="pf-etf pf-etf-qqc">
    <div class="pf-etf-ticker">QQC</div>
    <div class="pf-etf-alloc">30%</div>
    <div class="pf-etf-name">Invesco NASDAQ 100 ETF</div>
    <div class="pf-etf-desc">A deliberate tilt toward AI, cloud, biotech, and clean energy. More volatility — a tradeoff I'm consciously making for a multi-decade horizon.</div>
    <span class="pf-etf-badge">🚀 Growth Tilt</span>
  </div>

  <div class="pf-etf pf-etf-xeqt">
    <div class="pf-etf-ticker">XEQT</div>
    <div class="pf-etf-alloc">20%</div>
    <div class="pf-etf-name">iShares Core Equity ETF Portfolio</div>
    <div class="pf-etf-desc">Thousands of companies across North America, Europe, Asia, and emerging markets. My hedge against geographic concentration risk.</div>
    <span class="pf-etf-badge">🌍 Global Hedge</span>
  </div>

</div>

<div class="pf-risk">
  <div class="pf-risk-icon">⚠️</div>
  <div>
    <div class="pf-risk-title">This is not financial advice</div>
    <div class="pf-risk-text">I am not a financial advisor. I'm a regular person running a personal experiment and documenting it publicly. All investments carry risk. ETFs can lose value. Markets can crash and stay crashed for years — it happened in 2000, in 2008, and it will happen again. Nothing here guarantees any return. Please do your own research. If you're unsure, speak to a registered financial advisor before making any investment decisions.</div>
  </div>
</div>

<div class="pf-divider"><div class="pf-divider-line"></div><span class="pf-divider-label">📅 Monthly Performance Log</span><div class="pf-divider-line"></div></div>

<div class="pf-tracker">
  <div class="pf-tracker-header">
    <span class="pf-tracker-title">Live Experiment Results</span>
    <span class="pf-tracker-badge">🟢 Active — Updated Monthly</span>
  </div>
  <table>
    <thead>
      <tr>
        <th>Month</th>
        <th>ETF</th>
        <th>Invested</th>
        <th>Market Value</th>
        <th>Gain / Loss</th>
      </tr>
    </thead>
    <tbody>
      <tr class="empty-row">
        <td colspan="5">⏳ First update coming end of April 2026 — check back soon.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="pf-divider"><div class="pf-divider-line"></div><span class="pf-divider-label">🎬 Video Walkthrough</span><div class="pf-divider-line"></div></div>

<div class="pf-video-wrap">
  <div class="pf-video-header">
    <span class="pf-video-dot"></span>
    <span class="pf-video-title">Full breakdown — strategy, ETF selection, and the experiment setup</span>
  </div>
  {% include embed/youtube.html id='MwuX8JzkPTU' %}
</div>

<div class="pf-promise">
  <h3>The Promise</h3>
  <div class="pf-promise-divider"></div>
  <p>This blog will never sell you anything. If the strategy works, you'll see it. If it underperforms, you'll see that too. No cherry-picking. No narrative spin. Just the numbers — updated every month, for as long as the experiment runs. For everyone who deserved to see the truth before handing their money to someone in a rented Ferrari.</p>
</div>

</div>