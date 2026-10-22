/**
 * SIGNATURE PROPERTY & CONSULTANT — Interactive Behaviors & Security Controller
 */

/**
 * XSS Sanitizer: Strips HTML tags, script vectors, and malicious characters.
 * @param {string} str - Raw input string
 * @returns {string} Sanitized string
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // remove HTML tag brackets
    .replace(/javascript:/gi, '') // remove javascript pseudo-protocols
    .replace(/on\w+=/gi, '') // remove inline DOM event handlers
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // remove control characters
    .trim();
}

export function initInteractions() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) menuIcon.setAttribute('icon', 'solar:close-circle-linear');
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on clicking any navigation link
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
      });
    });
  }

  // Expose globally for inline fallback if needed
  window.toggleMobileMenu = toggleMobileMenu;

  // 2. Smooth Section Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });

  // 3. Single-Active FAQ Accordion
  document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.closest('.faq-item');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all accordion panels
      document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('button');
        const ans = item.querySelector('.faq-answer');
        const ico = item.querySelector('.faq-icon');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (ans) ans.style.maxHeight = '0';
        if (ico) ico.style.transform = 'rotate(0deg)';
      });

      // Expand clicked panel if previously closed
      if (!isExpanded && currentItem) {
        button.setAttribute('aria-expanded', 'true');
        const answer = currentItem.querySelector('.faq-answer');
        const icon = currentItem.querySelector('.faq-icon');
        if (answer) answer.style.maxHeight = `${answer.scrollHeight + 32}px`;
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });

  // 4. Accessible Modal Controller with Focus Management & Escape Listener
  const modals = ['inquiryModal', 'privacyModal', 'disclaimerModal'];

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    const firstInput = modal.querySelector('input, textarea, select, button');
    if (firstInput) firstInput.focus();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('hidden');
    // Check if any modal remains open
    const anyOpen = modals.some(mId => {
      const el = document.getElementById(mId);
      return el && !el.classList.contains('hidden');
    });
    if (!anyOpen) {
      document.body.classList.remove('modal-open');
    }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close modals on clicking backdrop or Escape key
  modals.forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(id);
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(id => closeModal(id));
    }
  });

  // 5. Secure Inquiry Form Submission with Anti-Spam & Sanitization
  const leadForm = document.getElementById('leadForm');
  let isSubmitting = false;

  if (leadForm) {
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (isSubmitting) return;

      isSubmitting = true;
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting WhatsApp...</span>`;
      }

      // Extract and sanitize input fields
      const rawName = document.getElementById('leadName')?.value || '';
      const rawPhone = document.getElementById('leadPhone')?.value || '';
      const rawLocation = document.getElementById('leadLocation')?.value || '';
      const rawService = document.getElementById('leadService')?.value || '';
      const rawMessage = document.getElementById('leadMessage')?.value || '';

      const cleanName = sanitizeInput(rawName);
      const cleanPhone = sanitizeInput(rawPhone);
      const cleanLocation = sanitizeInput(rawLocation);
      const cleanService = sanitizeInput(rawService);
      const cleanMessage = sanitizeInput(rawMessage);

      // Validate minimal requirements
      if (cleanName.length < 2 || cleanPhone.length < 7) {
        alert('Please provide a valid name and phone / WhatsApp number.');
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        return;
      }

      const formattedText = encodeURIComponent(
        `*New Property Inquiry — Signature Property*\n\n` +
        `*Name:* ${cleanName}\n` +
        `*Phone:* ${cleanPhone}\n` +
        `*Location:* ${cleanLocation}\n` +
        `*Service Required:* ${cleanService}\n` +
        `*Details:* ${cleanMessage || 'N/A'}\n\n` +
        `_Dispatched securely via portfolio.signatureproperty.pk_`
      );

      const targetUrl = `https://wa.me/923298838068?text=${formattedText}`;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');

      // Reset and close modal
      setTimeout(() => {
        leadForm.reset();
        closeModal('inquiryModal');
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 600);
    });
  }
}
