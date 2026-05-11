---
layout: tags
icon: fas fa-tags
order: 5
---

<style>
/* Shared page formatting for tab pages */
.dynamic-title {
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.8rem;
  color: var(--heading-color, var(--text-color));
}
.content {
  font-size: 1.08rem;
  line-height: 1.75;
  color: var(--text-color);
  max-width: 68rem;
  margin-top: 2rem;
  overflow-wrap: break-word;
}

@media all and (min-width: 1200px) {
  .content {
    font-size: 1.03rem;
  }
}
.content p {
  margin-bottom: 1.5rem;
}
#tags {
  gap: 0.75rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: var(--card-bg, rgba(15,23,42,0.05));
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
}
.tag span {
  opacity: 0.65;
  font-size: 0.85rem;
}
</style>

This page shows all tags used across the site. Click any tag to view related posts in the same topic area.

