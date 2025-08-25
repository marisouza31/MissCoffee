let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-item');
const totalSlides = slides.length;

const updateSlide = () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  document.querySelector('.carrossel-slide').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

document.addEventListener('DOMContentLoaded', () => {
  // botão próximo
  document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    if(slideIndex >= totalSlides) slideIndex = 0;
    updateSlide();
  });

  // botão anterior
  document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    if(slideIndex < 0) slideIndex = totalSlides - 1;
    updateSlide();
  });

  // ajuste ao redimensionar
  window.addEventListener('resize', updateSlide);
  
  // inicializa
  updateSlide();
});
