/**
 * SIGNATURE PROPERTY & CONSULTANT — Luxury Inverted Cursor Engine
 */
export function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isCoarsePointer || prefersReducedMotion) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderCursor);
    }
  }, { passive: true });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.45;
    cursorY += (mouseY - cursorY) * 0.45;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    if (Math.abs(mouseX - cursorX) > 0.1 || Math.abs(mouseY - cursorY) > 0.1) {
      requestAnimationFrame(renderCursor);
    } else {
      isMoving = false;
    }
  }

  // Interactive Hover Expansion
  const interactiveSelector = '.interactive, a, button, input, select, textarea, .faq-item, .tilt';
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      cursor.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      cursor.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}
