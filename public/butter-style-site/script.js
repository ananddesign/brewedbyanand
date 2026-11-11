// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav: scrolled state + mobile menu =====
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 8);
}, { passive: true });
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// ===== Logo marquee (duplicated for seamless loop) =====
const brands = ['Northstar', 'Vantage', 'Lumen', 'Orbit', 'Pulse', 'Cadence',
  'Verve', 'Halo', 'Ember', 'Drift', 'Nova', 'Atlas'];
const row = document.getElementById('marqueeRow');
row.innerHTML = [...brands, ...brands].map(b => `<span>${b}</span>`).join('');

// ===== Templates: tabbed grid =====
const templates = {
  beauty:   [['Glass Skin','g2'],['Serum Drop','g1'],['Rose Gold','g3']],
  apparel:  [['Denim Fade','g3'],['Runway Cut','g4'],['Streetwear','g2']],
  food:     [['Watermelon Rind','g1'],['Soda Splash','g4'],['Slow Pour','g3']],
  software: [['Onboarding','g2'],['Feature Drop','g1'],['Changelog','g4']],
};
const grid = document.getElementById('templateGrid');
function renderTemplates(cat){
  grid.innerHTML = templates[cat].map(([name, g]) =>
    `<div class="tpl ${g}"><span>${name}</span></div>`).join('');
}
renderTemplates('beauty');
document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderTemplates(btn.dataset.cat);
});

// ===== Scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section__head, .block, .pillar, .method, .benefit, .split__copy, .split__media, .shot, .cta__inner')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });
