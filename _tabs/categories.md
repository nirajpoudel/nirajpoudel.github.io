---
layout: categories
icon: fas fa-stream
order: 4
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
  line-height: 1.75;
  color: var(--text-color);
  max-width: 68rem;
}
.content p {
  margin-bottom: 1.5rem;
}
.card.categories {
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  border-radius: 1.2rem;
  background: var(--surface-color, #fff);
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}
.card.categories .card-header,
.card.categories .list-group-item {
  border: none;
  padding: 1rem 1.1rem;
}
.card.categories .card-header {
  background: var(--card-bg, rgba(15,23,42,0.04));
}
.card.categories .list-group-item {
  border-bottom: 1px solid var(--border-color, rgba(128,128,128,0.15));
}
.card.categories .list-group-item:last-child {
  border-bottom: none;
}
.category-trigger {
  color: var(--link-color);
}
</style>

Welcome to the categories index. Browse through the site categories to discover related posts grouped by topic.

