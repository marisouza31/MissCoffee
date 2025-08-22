var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1, // muda 1 slide por vez nessa largura
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2, // muda 2 slides por vez
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            slidesPerGroup: 3, // muda 3 slides por vez
            spaceBetween: 24
        }
    }
});
