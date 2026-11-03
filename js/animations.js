/**
 * SIGNATURE PROPERTY & CONSULTANT — Luxury Motion & Animation Controller
 */
export function initAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Sticky Navigation Scroll Effect
  const nav = document.getElementById('nav');
  const heroImage = document.getElementById('heroImage');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (nav) {
      if (y > 30) {
        nav.classList.add('scrolled', 'bg-[#f5f5f2]/85', 'backdrop-blur-xl', 'border-black/10', 'shadow-sm');
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove('scrolled', 'bg-[#f5f5f2]/85', 'backdrop-blur-xl', 'border-black/10', 'shadow-sm');
        nav.classList.add('border-transparent');
      }
    }

    if (!reduceMotion && heroImage && y < window.innerHeight * 1.3) {
      heroImage.style.transform = `translateX(-50%) translateY(${y * 0.12}px) scale(${1 + y * 0.00008})`;
    }
  }, { passive: true });

  // 2. Staggered Scroll Reveal Observer
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    if (reduceMotion) {
      reveals.forEach(el => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(el => revealObserver.observe(el));
    }
  }

  // 3. 3D Perspective Card Tilt
  if (!reduceMotion) {
    const tiltCards = document.querySelectorAll('.tilt');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(56rem) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(0.995)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(56rem) rotateX(0) rotateY(0) scale(1)';
      });
    });
  }

  // 4. Numerical Metrics Counter Easing
  const metricsContainer = document.getElementById('metrics');
  if (metricsContainer) {
    let counted = false;
    const metricsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll('.metric').forEach(metric => {
          const target = Number(metric.dataset.target) || 0;
          const suffix = metric.dataset.suffix || '';
          const start = performance.now();
          const duration = reduceMotion ? 1 : 1400;

          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            metric.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        });
      }
    }, { threshold: 0.2 });

    metricsObserver.observe(metricsContainer);
  }

  // 5. Back to Top Button Visibility
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btt.classList.remove('opacity-0', 'pointer-events-none');
        btt.classList.add('opacity-100');
      } else {
        btt.classList.add('opacity-0', 'pointer-events-none');
        btt.classList.remove('opacity-100');
      }
    }, { passive: true });
  }
}
