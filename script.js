const imgs = document.getElementById("carousel-images");
const img = document.querySelectorAll("#carousel-images .card-carrousel");

let idx = 0;
let tamanho = 37;

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
  imgs.style.transform = `translateX(-${(idx * tamanho)}%`; 
}