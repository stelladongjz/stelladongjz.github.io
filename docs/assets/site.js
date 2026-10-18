// Shared behavior for every page: headline animation, blobs, cursor, reveals, header, nav.

// Split headline into characters for the staggered rise animation (home page only)
document.querySelectorAll('[data-split]').forEach(el => {
  const text = el.textContent; el.textContent = '';
  [...text].forEach((c, i) => {
    const s = document.createElement('span');
    s.className = 'ch'; s.style.setProperty('--i', i);
    s.textContent = c === ' ' ? ' ' : c;
    s.setAttribute('aria-hidden', 'true');
    el.appendChild(s);
  });
});

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Blobs gently follow the cursor (lerped for a soft, liquid feel)
if (!reduce) {
  const a = document.getElementById('blobA'), b = document.getElementById('blobB');
  let tx = 0, ty = 0, x = 0, y = 0, sy = 0;
  window.addEventListener('pointermove', e => {
    tx = (e.clientX / innerWidth - 0.5) * 80;
    ty = (e.clientY / innerHeight - 0.5) * 80;
  });
  window.addEventListener('scroll', () => { sy = scrollY; }, { passive: true });
  (function loop() {
    x += (tx - x) * 0.04; y += (ty - y) * 0.04;
    a.style.transform = `translate(${x}px, ${y - sy * 0.15}px)`;
    b.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6 - sy * 0.08}px)`;
    requestAnimationFrame(loop);
  })();
}

// Fuzzy circle cursor: soft glow trails the pointer and swells over links
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.documentElement.classList.add('has-cursor');
  const c = document.getElementById('cursor');
  let mx = -100, my = -100, cx = -100, cy = -100;
  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    c.classList.add('visible');
    c.classList.toggle('hovering', !!e.target.closest('a, button, .card'));
  });
  document.addEventListener('pointerleave', () => c.classList.remove('visible'));
  addEventListener('pointerdown', () => c.classList.add('pressed'));
  addEventListener('pointerup', () => c.classList.remove('pressed'));
  const ease = reduce ? 1 : 0.18;
  (function follow() {
    cx += (mx - cx) * ease; cy += (my - cy) * ease;
    c.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(follow);
  })();
}

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (el.closest('.grid') ? (i % 4) * 90 : 0) + 'ms';
  io.observe(el);
});

// Active nav link: subpages mark themselves with <body data-page="...">;
// on the home page, Home/About follow the scroll position instead.
const header = document.getElementById('top');
const page = document.body.dataset.page;
const navLinks = [...document.querySelectorAll('nav a')];
const setActive = name => navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === name));
setActive(page);

const about = document.getElementById('about');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 40);
  if (page === 'home' && about) {
    setActive(about.getBoundingClientRect().top < innerHeight * 0.4 ? 'about' : 'home');
  }
}, { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();
