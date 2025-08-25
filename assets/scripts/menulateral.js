// menu de hamburguer mobile
let btnMenu = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".cabecalho__nav--lista")
let menuLinks = document.querySelectorAll(".cabecalho__lista--link")

btnMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// link de menu de cafe do texto "ver mais opções"
  document.querySelector(".more-options-cafes").addEventListener("click", function() {
    const extraMenu = document.querySelector(".extra-menu");
    extraMenu.style.display = (extraMenu.style.display === "flex") ? "none" : "flex";
  });