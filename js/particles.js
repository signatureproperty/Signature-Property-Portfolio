/**
 * SIGNATURE PROPERTY & CONSULTANT — Ambient Dust Particle Engine
 */
export function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  container.appendChild(canvas);
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const particleCount = window.innerWidth < 768 ? 40 : 80;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 1.6 + 0.4,
    speed: Math.random() * 0.00008 + 0.00003,
    opacity: Math.random() * 0.4 + 0.12,
    drift: (Math.random() - 0.5) * 0.00004
  }));

  let width = 0;
  let height = 0;

  function handleResize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  handleResize();
  window.addEventListener('resize', handleResize, { passive: true });

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y = (p.y + p.speed) % 1;
      p.x = (p.x + p.drift + 1) % 1;

      ctx.beginPath();
      ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 95, 75, ${p.opacity})`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  // Pause when hero is out of view to preserve battery & CPU
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!animationFrameId) render();
    } else {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }, { threshold: 0.05 });

  observer.observe(container);
}
