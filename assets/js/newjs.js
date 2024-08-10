document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerElement = document.querySelector("#footer");
      if (footerElement) {
        footerElement.innerHTML = data;
      } else {
        document.body.insertAdjacentHTML("afterbegin", data);
      }
    })
    .catch((error) => console.error("Error al cargar el footer:", error));

  const capitalizeElement = document.querySelector("#capitalize");
  if (capitalizeElement) {
    fetch("capitalize.html")
      .then((response) => response.text())
      .then((data) => {
        capitalizeElement.innerHTML = data;
      })
      .catch((error) =>
        console.error("Error al cargar el archivo capitalize.html:", error)
      );
  }

  const helpElement = document.querySelector("#help");
  if (helpElement) {
    fetch("ayuda.html")
      .then((response) => response.text())
      .then((data) => {
        helpElement.innerHTML = data;
      })
      .catch((error) =>
        console.error("Error al cargar el archivo ayuda.html:", error)
      );
  }

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

  fetch("testimonios.html")
    .then((response) => response.text())
    .then((data) => {
      const testimonials2Element = document.getElementById("testimonials-2");
      if (testimonials2Element) {
        testimonials2Element.innerHTML = data;

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

        AOS.init();
      }
    })
    .catch((error) => console.error("Error al cargar testimonios:", error));

  fetch("testimonios-ciomers.html")
    .then((response) => response.text())
    .then((data) => {
      const testimonials3Element = document.getElementById("testimonials-3");
      if (testimonials3Element) {
        testimonials3Element.innerHTML = data;

        var swiper3 = new Swiper(".mySwiper3", {
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
      }
    })
    .catch((error) =>
      console.error("Error al cargar testimonios de clientes:", error)
    );

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
