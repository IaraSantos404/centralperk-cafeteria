/* Carrossel*/
const imgs = document.getElementById("carousel-images");
const img = document.querySelectorAll("#carousel-images .card-carrousel");

let idx = 0;

function getCardWidth() {
  const card = img[0]; 
  return card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
}

function showNextImage() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0; 
  }
  updateCarousel();
}

function showPreviousImage() {
  idx--;
  if (idx < 0) {
    idx = img.length - 1; 
  }
  updateCarousel();
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  imgs.style.transform = `translateX(-${idx * cardWidth}px)`;
  imgs.style.transition = "transform 0.4s ease-in-out";
}
window.addEventListener('resize', () => {
  updateCarousel();
});


/* Responsividade do menu */
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('#menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
