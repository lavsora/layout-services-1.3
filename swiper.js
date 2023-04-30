import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
        767: {
            enabled: false,
            spaceBetween: 0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
