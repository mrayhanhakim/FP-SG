document.body.onload = function onLoad() {
  const navButton = document.getElementById('nav-button');
  const navMenu = document.getElementById('nav-link-wrapper');
  const leftNav = document.getElementById('left-nav');
  const rightNav = document.getElementById('right-nav');
  const navIcon = document.getElementById('nav-icon');
  const navIconText = document.getElementById('nav-icon-text');
  navButton.addEventListener('click', () => {
    navMenu.classList.toggle('drop');
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      navMenu.removeAttribute('class');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      leftNav.style.paddingTop = '7px';
      leftNav.style.paddingBottom = '7px';
      rightNav.style.paddingTop = '7px';
      rightNav.style.paddingBottom = '7px';
      navIcon.style.width = '21px';
      navIcon.style.height = '21px';
      navIconText.style.fontSize = '18px';
    } else {
      leftNav.style.paddingTop = '20px';
      leftNav.style.paddingBottom = '20px';
      rightNav.style.paddingTop = '20px';
      rightNav.style.paddingBottom = '20px';
      if (window.matchMedia('(min-width: 768px)').matches) {
        navIcon.style.width = '42px';
        navIcon.style.height = '42px';
        navIconText.style.fontSize = '26px';
      } else {
        navIcon.style.width = '28px';
        navIcon.style.height = '28px';
        navIconText.style.fontSize = '20px';
      }
    }
  });
};
