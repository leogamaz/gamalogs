export {};

const MOBILE_QUERY = '(max-width: 920px)';
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

interface InPageNavInstance {
  button: HTMLButtonElement;
  panel: HTMLElement;
  open: boolean;
}

const instances: InPageNavInstance[] = [];
const initializedButtons = new WeakSet<HTMLButtonElement>();
const mediaQuery = window.matchMedia(MOBILE_QUERY);

function getFocusableElements(panel: HTMLElement) {
  return Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => element.getClientRects().length > 0,
  );
}

function syncBodyLock() {
  document.body?.classList.toggle(
    'in-page-nav-open',
    mediaQuery.matches && instances.some((instance) => instance.open),
  );
}

function syncButton(instance: InPageNavInstance) {
  const { button, open } = instance;
  const openText = button.dataset.inPageOpenText ?? 'Open';
  const closeText = button.dataset.inPageCloseText ?? 'Close';
  const targetText = button.dataset.inPageTargetText ?? '';

  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', `${open ? closeText : openText} ${targetText}`.trim());
}

function setPanelState(instance: InPageNavInstance, open: boolean, restoreFocus = false) {
  const isOpen = mediaQuery.matches && open;

  instance.open = isOpen;
  instance.panel.setAttribute('data-open', String(isOpen));
  instance.panel.setAttribute('aria-hidden', String(mediaQuery.matches && !isOpen));
  syncButton(instance);
  syncBodyLock();

  if (!isOpen && restoreFocus) {
    instance.button.focus();
  }
}

function focusPanel(instance: InPageNavInstance) {
  const [firstFocusable] = getFocusableElements(instance.panel);
  (firstFocusable ?? instance.panel).focus();
}

function handlePanelKeydown(instance: InPageNavInstance, event: KeyboardEvent) {
  if (!instance.open || !mediaQuery.matches) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    setPanelState(instance, false, true);
    return;
  }

  if (event.key !== 'Tab') return;

  const focusableElements = getFocusableElements(instance.panel);

  if (focusableElements.length === 0) {
    event.preventDefault();
    instance.panel.focus();
    return;
  }

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement;

  if (!instance.panel.contains(activeElement)) {
    event.preventDefault();
    firstFocusable.focus();
  } else if (activeElement === instance.panel) {
    event.preventDefault();
    (event.shiftKey ? lastFocusable : firstFocusable).focus();
  } else if (event.shiftKey && activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  } else if (!event.shiftKey && activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
}

function initializeButton(button: HTMLButtonElement) {
  if (initializedButtons.has(button)) return;

  initializedButtons.add(button);
  const panelId = button.getAttribute('aria-controls');
  const panel = panelId ? document.getElementById(panelId) : null;

  if (!(panel instanceof HTMLElement)) {
    button.hidden = true;
    return;
  }

  const instance: InPageNavInstance = { button, panel, open: false };
  instances.push(instance);
  button.hidden = false;

  button.addEventListener('click', () => {
    if (!mediaQuery.matches) return;
    setPanelState(instance, !instance.open);

    if (instance.open) {
      focusPanel(instance);
    }
  });

  panel.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element) || !target.closest('a')) return;
    if (instance.open) setPanelState(instance, false, true);
  });

  document.addEventListener('keydown', (event) => handlePanelKeydown(instance, event), true);
  setPanelState(instance, false);
}

function initialize() {
  document.querySelectorAll<HTMLButtonElement>('[data-in-page-nav-toggle]').forEach((button) => {
    initializeButton(button);
  });
}

function handleMediaChange() {
  instances.forEach((instance) => setPanelState(instance, false));
}

mediaQuery.addEventListener('change', handleMediaChange);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
