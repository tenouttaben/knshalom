document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  const header = document.querySelector('.site-header');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  if (!header) return;

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (y > 8) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    if (y === 0) header.classList.add('transparent'); else header.classList.remove('transparent');
  };

  onScroll();
  document.addEventListener('scroll', onScroll, { passive: true });
});