---
layout: archives
icon: fas fa-archive
order: 3
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
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-color);
  max-width: 68rem;
}
.content p {
  margin-bottom: 1.5rem;
}
#archives {
  padding: 1rem 1.2rem;
  border-radius: 1.2rem;
  background: var(--surface-color, #fff);
  border: 1px solid var(--border-color, rgba(128,128,128,0.2));
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}
#archives .year {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 0.85rem;
}
#archives ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#archives li {
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border-color, rgba(128,128,128,0.15));
}
#archives li:last-child {
  border-bottom: none;
}
#archives .date {
  display: inline-flex;
  width: 2.4rem;
  justify-content: center;
  padding: 0.3rem 0;
  background: var(--border-color, rgba(128,128,128,0.12));
  border-radius: 0.75rem;
  font-weight: 600;
}
#archives a {
  color: var(--link-color);
  text-decoration: none;
}
#archives .month {
  margin-left: 0.75rem;
  opacity: 0.65;
}
</style>

Use the archive view to browse posts by date. This page makes it easy to find older content in chronological order.

