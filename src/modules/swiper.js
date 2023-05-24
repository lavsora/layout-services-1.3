import Swiper, { Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    width: 240,
    spaceBetween: 16,
    breakpoints: {
        768: {
            enabled: false,
            spaceBetween: 0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
