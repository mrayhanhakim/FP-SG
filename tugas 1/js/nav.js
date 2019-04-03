document.body.onload = function onLoad() {
  const navBar = document.getElementById('nav');
  const navButton = document.getElementById('nav-button');
  const navMenu = document.getElementById('nav-link-wrapper');
  const leftNav = document.getElementById('left-nav');
  const rightNav = document.getElementById('right-nav');
  const navIcon = document.getElementById('nav-icon');
  const windowTablet = window.matchMedia('(min-width: 768px)');
  let navBarHeight;

  const navIconText = document.getElementById('nav-icon-text');
  navButton.addEventListener('click', () => {
    navMenu.classList.toggle('drop');
  });

  window.addEventListener('resize', () => {
    if (windowTablet.matches) {
      navMenu.removeAttribute('class');
    }
  });

  window.addEventListener('scroll', () => {
    navBarHeight = navBar.offsetHeight;
    navMenu.style.top = `${navBarHeight}px`;
    if (window.scrollY > 100) {
      leftNav.classList.add('shrink');
      rightNav.classList.add('shrink');
      navIcon.classList.add('shrink');
      navIconText.classList.add('shrink');
      if (leftNav.classList.contains('unshrink')) {
        leftNav.classList.remove('unshrink');
        rightNav.classList.remove('unshrink');
        navIcon.classList.remove('unshrink');
        navIconText.classList.remove('unshrink');
      }
    } else {
      leftNav.classList.remove('shrink');
      rightNav.classList.remove('shrink');
      navIcon.classList.remove('shrink');
      navIconText.classList.remove('shrink');
      leftNav.classList.add('unshrink');
      rightNav.classList.add('unshrink');
      navIcon.classList.add('unshrink');
      navIconText.classList.add('unshrink');
    }
  });
};
