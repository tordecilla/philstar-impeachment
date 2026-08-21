/*
 * PHILSTAR LIFE AD INTEGRATION
 *
 * theme.js emits stable elements such as:
 *   <aside id="psl-ad-panel-01" data-psl-ad-slot="panel-01">...</aside>
 *
 * Replace the listener body below with the partner's approved ad-provider
 * calls. Keeping those calls here prevents generated editorial pages from
 * carrying hand-edited ad code.
 */
window.addEventListener('philstarlife:adslotsready', (event) => {
  const slots = event.detail?.slots || [];
  // Example integration point:
  // slots.forEach((slot) => partnerAds.mount(slot.id, slot.dataset.pslAdSlot));
  void slots;
});
