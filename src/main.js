import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icons if they exist
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      if (newTheme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  };

  initTheme();

  // Mobile Menu Toggle
  const toggleBtn = document.querySelectorAll('.mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.style.display = 'block';
        btn.textContent = '✕';
      } else {
        mobileMenu.style.display = 'none';
        btn.textContent = '☰';
      }
    });
  });

  // Theme Toggle Button Event
  document.addEventListener('click', (e) => {
    if (e.target.closest('.theme-toggle')) {
      toggleTheme();
    }
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.card, .hero h1, .hero p, .section h2, .stat-item, h1, h2, h3, .section p, .btn');
  animatedElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });

  // Revenue Growth Potential Calculator
  window.calcGrowth = () => {
    const currentRev = parseFloat(document.getElementById('calc-revenue').value);
    const traffic = parseFloat(document.getElementById('calc-traffic').value);
    const cr = parseFloat(document.getElementById('calc-cr').value) / 100;

    if (!currentRev || !traffic || !cr) {
      alert('Please fill in all fields to see your potential.');
      return;
    }

    // Assumptions for "Growth System" optimization
    const targetCR = cr * 1.5; // 50% increase in conversion rate
    const targetTraffic = traffic * 2.5; // 150% increase in traffic
    const potentialRev = (targetTraffic * (currentRev / traffic / cr) * targetCR).toFixed(0);
    const lift = (((potentialRev - currentRev) / currentRev) * 100).toFixed(0);

    const resultDiv = document.getElementById('calc-result');
    resultDiv.innerHTML = `
      <div style="background: var(--color-bg-alt); padding: 2rem; border-radius: 12px; border: 1px solid var(--color-accent); margin-top: 2rem;">
        <h4 style="color: var(--color-growth); margin-bottom: 0.5rem;">Potential: $${Number(potentialRev).toLocaleString()}/mo</h4>
        <p style="font-size: 0.9rem; color: var(--color-text);">That's a <strong>${lift}% increase</strong> in monthly revenue by optimizing your traffic and conversion funnel.</p>
        <a href="#contact-form" class="btn btn-accent" style="margin-top: 1rem; width: 100%;">Get the Roadmap to This Number</a>
      </div>
    `;
    resultDiv.style.display = 'block';
  };
});
