// Inject two Calendly CTA buttons under the site subtitle in the sidebar.
(function () {
  function createButton(href, text, classes, aria) {
    var a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = classes;
    a.setAttribute('aria-label', aria || text);
    // For the sidebar-book-btn we render an icon and a text span (text shown on mobile).
    if (classes && classes.indexOf('sidebar-book-btn') !== -1) {
      a.innerHTML = '<i class="fas fa-calendar-alt" aria-hidden="true"></i><span class="btn-text">' + text + '</span>';
      a.title = text;
    } else {
      a.textContent = text;
    }
    return a;
  }

  function insertCTAs() {
    // Insert a small calendar icon link beside the site title in the sidebar header
    var title = document.querySelector('#sidebar header .site-title');
    if (!title) return;

    // Avoid duplicate insertion
    if (title.parentNode.querySelector('.sidebar-name-cta')) return;

    var calendly = 'https://calendly.com/njpdl';
    var a = document.createElement('a');
    a.href = calendly;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'nav-link sidebar-name-cta';
    a.setAttribute('aria-label', 'Book Now on Calendly');
    a.title = 'Book Now';
    a.innerHTML = '<i class="fas fa-calendar-alt" aria-hidden="true"></i>';

    // Insert right after the title link
    title.parentNode.insertBefore(a, title.nextSibling);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertCTAs);
  } else {
    insertCTAs();
  }
})();
