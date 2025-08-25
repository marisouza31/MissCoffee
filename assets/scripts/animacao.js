const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");   // aparece
    } else {
      entry.target.classList.remove("active"); // some instantâneo
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".menu-row, .cake-item").forEach(el => {
  el.classList.add("reveal"); // estado inicial
  observer.observe(el);
});
