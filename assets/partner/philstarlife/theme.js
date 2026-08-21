const philstarMenuToggle = document.querySelector('.psl-menu-toggle');
const philstarMenu = document.querySelector('#psl-menu');
const philstarMoreToggle = document.querySelector('.psl-more-toggle');
const philstarMoreMenu = document.querySelector('#psl-more-menu');

philstarMenuToggle?.addEventListener('click', () => {
  const open = philstarMenuToggle.getAttribute('aria-expanded') === 'true';
  philstarMenuToggle.setAttribute('aria-expanded', String(!open));
  philstarMenu?.classList.toggle('is-open', !open);
});

document.querySelectorAll('.psl-nav-group > button').forEach((button) => {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.psl-nav-group > button[aria-expanded="true"]').forEach((active) => {
      if (active !== button) active.setAttribute('aria-expanded', 'false');
    });
    button.setAttribute('aria-expanded', String(!open));
  });
});

philstarMoreToggle?.addEventListener('click', () => {
  const open = philstarMoreToggle.getAttribute('aria-expanded') === 'true';
  philstarMoreToggle.setAttribute('aria-expanded', String(!open));
  philstarMoreMenu?.classList.toggle('is-open', !open);
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.psl-global-nav')) return;
  document.querySelectorAll('.psl-nav-group > button[aria-expanded="true"]').forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
  });
  philstarMoreToggle?.setAttribute('aria-expanded', 'false');
  philstarMoreMenu?.classList.remove('is-open');
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  philstarMenuToggle?.setAttribute('aria-expanded', 'false');
  philstarMenu?.classList.remove('is-open');
  philstarMoreToggle?.setAttribute('aria-expanded', 'false');
  philstarMoreMenu?.classList.remove('is-open');
  document.querySelectorAll('.psl-nav-group > button[aria-expanded="true"]').forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
  });
});

const adPanels = [...document.querySelectorAll('#content > section, #content > .articles-reading-layout')]
  .filter((panel) => panel.scrollHeight >= 280 && !panel.matches('.articles-note'));
const adSlots = adPanels.map((panel, index) => {
  const position = `panel-${String(index + 1).padStart(2, '0')}`;
  const slot = document.createElement('aside');
  slot.className = 'psl-ad-slot';
  slot.id = `psl-ad-${position}`;
  slot.dataset.pslAdSlot = position;
  slot.setAttribute('aria-label', 'Advertisement');
  slot.innerHTML = '<span>Advertisement</span><div>PhilSTAR Life ad slot</div>';
  panel.insertAdjacentElement('afterend', slot);
  return slot;
});

const allAdSlots = [...document.querySelectorAll('[data-psl-ad-slot]')];
window.dispatchEvent(new CustomEvent('philstarlife:adslotsready', { detail: { slots: allAdSlots } }));
