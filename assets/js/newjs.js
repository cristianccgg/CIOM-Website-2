document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  AOS.init();

  const accordionButtons = document.querySelectorAll(
    ".custom-accordion-button"
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("active");
      } else {
        document
          .querySelectorAll(".custom-accordion-content")
          .forEach((item) => {
            if (item !== content) {
              item.style.display = "none";
              item.previousElementSibling.classList.remove("active");
            }
          });

        content.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
