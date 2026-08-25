export {};

const MOBILE_QUERY = '(max-width: 599px)';
const mediaQuery = window.matchMedia(MOBILE_QUERY);
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-site-nav-toggle]');

function setMenuState(button: HTMLButtonElement, open: boolean, restoreFocus = false) {
  const menuId = button.getAttribute('aria-controls');
  const menu = menuId ? document.getElementById(menuId) : null;
  if (!(menu instanceof HTMLElement)) return;

  const isOpen = mediaQuery.matches && open;
  menu.dataset.open = String(isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
  button.setAttribute('aria-label', isOpen ? button.dataset.closeLabel ?? 'Close main menu' : button.dataset.openLabel ?? 'Open main menu');

  if (!isOpen && restoreFocus) button.focus();
}

buttons.forEach((button) => {
  setMenuState(button, false);

  button.addEventListener('click', () => {
    if (mediaQuery.matches) setMenuState(button, button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setMenuState(button, false, true);
    }
  });

  const menuId = button.getAttribute('aria-controls');
  const menu = menuId ? document.getElementById(menuId) : null;
  menu?.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) setMenuState(button, false);
  });
});

mediaQuery.addEventListener('change', () => buttons.forEach((button) => setMenuState(button, false)));
