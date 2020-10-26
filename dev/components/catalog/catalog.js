import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
import "swiper/swiper-bundle.css";

var swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper_btn.swiper_btn--next",
    prevEl: ".swiper_btn.swiper_btn--prev",
  },
});

(() => {
  const images = catalog.querySelectorAll(".swiper-slide_image--after");

  function clipImage() {
    rangeCaption.style.left = `${range.value}%`;
    images.forEach((el) => {
      el.style.clipPath = `inset(0 0 0 ${range.value}%)`;
    });
  }

  clipImage();
  range.oninput = clipImage;
})();
