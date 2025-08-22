let btnMenu = document.querySelector(".menu-toggle");
let navLinks = document.querySelector(".cabecalho__nav--lista")

btnMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
