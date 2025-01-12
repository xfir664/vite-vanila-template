import Swiper from "swiper";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";

export function startSwiper() {
  const swiper = new Swiper(".init-swipper .swiper", {
    slidesPerView: 2,
    modules: [Pagination, Navigation],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
