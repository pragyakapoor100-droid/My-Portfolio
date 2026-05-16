// ============================================
// SEO AUDIT PORTFOLIO — main.js
// ============================================

// ---- Sticky nav shadow on scroll ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ---- Animate stats on scroll into view ----
const animateValue = (el, start, end, duration) => {
  const range = end - start;
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(start + range * eased);
    el.textContent = el.dataset.suffix
      ? current + el.dataset.suffix
      : el.dataset.prefix
        ? el.dataset.prefix + current
        : current;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

// ---- Intersection Observer for section reveals ----
const revealTargets = document.querySelectorAll(
  '.service-card, .case-card, .process__step, .stat'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ---- Contact form handler ----
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async send — replace with your actual endpoint
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#1a8a3c';
    btn.style.borderColor = '#1a8a3c';
    e.target.reset();

    setTimeout(() => {
      btn.textContent = 'Send Enquiry →';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 4000);
  }, 1200);
}

// ---- Smooth active nav highlight ----
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute('href') === `#${entry.target.id}`
              ? 'var(--accent)'
              : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));
