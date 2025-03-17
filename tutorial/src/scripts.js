var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "550px";
    }
  });
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('toggle');
    navMenu.classList.toggle('nav-active');
  });
});

function abrirImagem(src) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('imagem-grande');

  img.src = src;
  modal.classList.add('show');  // Adiciona a classe "show" para exibir a modal
  document.body.classList.add('modal-open');
}

function fecharImagem() {
  const modal = document.getElementById('modal');

  modal.classList.remove('show');  // Remove a classe "show" para iniciar o fade-out
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.mySwiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
      },
      rewind: true,
  });
});


// // Script para implementar o swiper
// let currentSlide = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll(".carousel-item");
//   const totalSlides = slides.length;

//   // Garantir que o índice esteja no intervalo
//   if (index >= totalSlides || index < 0) {
//     return; // Não faz nada se o índice estiver fora do intervalo
//   }

//   currentSlide = index;

//   // Remover a classe "active" de todos os slides
//   slides.forEach(slide => slide.classList.remove("active"));

//   // Adicionar a classe "active" ao slide atual
//   slides[currentSlide].classList.add("active");
// }

// function changeSlide(direction) {
//   const slides = document.querySelectorAll(".carousel-item");
//   const totalSlides = slides.length;

//   // Garantir que não ultrapasse os limites
//   const newIndex = currentSlide + direction;
//   if (newIndex >= totalSlides || newIndex < 0) {
//     return;
//   }

//   showSlide(newIndex);
// }

// // Inicializar o swiper
// showSlide(currentSlide);

// // Adicionar funcionalidade para teclas de navegação
// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowLeft") {
//     changeSlide(-1);
//   } else if (event.key === "ArrowRight") {
//     changeSlide(1);
//   }
// });

// // Adicionar funcionalidade de deslizar no mobile
// let touchStartX = 0;
// let touchEndX = 0;
// const carousel = document.querySelector(".carousel");

// carousel.addEventListener("touchstart", (event) => {
//   touchStartX = event.touches[0].clientX;
// });

// carousel.addEventListener("touchend", (event) => {
//   touchEndX = event.changedTouches[0].clientX;
//   const deltaX = touchEndX - touchStartX;

//   if (deltaX > 50 && currentSlide > 0) {
//     changeSlide(-1); // Deslizar para a esquerda
//   } else if (deltaX < -50 && currentSlide < document.querySelectorAll(".carousel-item").length - 1) {
//     changeSlide(1); // Deslizar para a direita
//   }

//   // Resetar os valores de toque
//   touchStartX = 0;
//   touchEndX = 0;
// });