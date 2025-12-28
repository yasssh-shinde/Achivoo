import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const toggleBtn = document.querySelectorAll('.mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.style.display = 'block';
        btn.textContent = '✕'; // Change to close icon
      } else {
        mobileMenu.style.display = 'none';
        btn.textContent = '☰'; // Change back to hamburger
      }
    });
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

  // Target elements to animate
  const animatedElements = document.querySelectorAll('.card, .hero h1, .hero p, .section h2, .stat-item, h1, h2, h3');
  animatedElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
});
