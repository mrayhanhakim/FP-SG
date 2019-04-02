/* eslint no-use-before-define: 0 */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('carousel-item');
  const bars = document.getElementsByClassName('bars');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < bars.length; i += 1) {
    bars[i].className = bars[i].className.replace(' active', '');
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  bars[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
