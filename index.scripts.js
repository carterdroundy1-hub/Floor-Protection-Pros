/* Floor Protection Pros — Site Interactions */
(function () {
  'use strict';

  // ---- Intro loader ----
  var loader = document.getElementById('siteLoader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('is-hidden');
      }, 350);
    });
  }

  // ---- Sticky nav background on scroll ----
  var nav = document.querySelector('.nav');
  function handleScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile menu toggle ----
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileMenu = document.querySelector('.nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') && !nav.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

})();
