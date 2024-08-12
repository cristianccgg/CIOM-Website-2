document.addEventListener("DOMContentLoaded", function () {
  function updateHoverTexts() {
    console.log("Updating hover texts...");

    // Actualizar hover texts para Cliente Misterioso (páginas anteriores)
    document
      .querySelectorAll(".cliente-misterioso .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-hover-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          slide.setAttribute("data-hover-text", translation);
          console.log(
            `Updated hover text for ${key} with translation: ${translation}`
          );
        }
      });

    // Actualizar hover texts para Auditorias (páginas anteriores)
    document
      .querySelectorAll(".auditorias-swiper .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-audit-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          if (translation) {
            console.log(
              `Updated hover text for ${key} with translation: ${translation}`
            );
            slide.setAttribute("data-hover-text", translation);
          } else {
            console.log(`No translation found for key: ${key}`);
          }
        } else {
          console.log(`No key found in class: ${className}`);
        }
      });

    // Actualizar hover texts para Monitoreo (nueva página)
    document
      .querySelectorAll(".monitoreo-swiper .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-monitoreo-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          slide.setAttribute("data-hover-text", translation);
          console.log(
            `Updated hover text for ${key} with translation: ${translation}`
          );
        }
      });

    document
      .querySelectorAll(".crowdsourcing-swiper .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-crowdsourcing-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          slide.setAttribute("data-hover-text", translation);
          console.log(
            `Updated hover text for ${key} with translation: ${translation}`
          );
        }
      });
  }

  function checkI18nReady() {
    if (i18next.isInitialized) {
      console.log("i18next is initialized");
      updateContent(); // Ensure this updates content only when i18next is ready
    } else {
      console.log("i18next is not initialized yet, checking again...");
      setTimeout(checkI18nReady, 100); // Check again after 100ms
    }
  }

  function updateContent() {
    console.log("Updating content...");
    document.querySelectorAll("[id]").forEach(function (el) {
      const id = el.getAttribute("id");
      if (i18next.exists(id)) {
        el.innerHTML = i18next.t(id);
        console.log(`Updated ${id} with translation: ${i18next.t(id)}`);
      }
    });

    updateNavbarContent();
    updateHoverTexts(); // Ensure hover texts are updated here
  }

  function updateNavbarContent() {
    const navbar = document.querySelector("#navbar-container");
    if (navbar) {
      navbar.querySelectorAll("[id]").forEach(function (el) {
        const id = el.getAttribute("id");
        if (i18next.exists(id)) {
          el.innerHTML = i18next.t(id);
          console.log(
            `Updated ${id} in navbar with translation: ${i18next.t(id)}`
          );
        }
      });
    }
  }

  // function loadNavbar() {
  //   fetch("navbar.html")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       document.querySelector("body").insertAdjacentHTML("afterbegin", data);
  //       const script = document.createElement("script");
  //       script.src = "assets/js/navbar.js";
  //       document.body.appendChild(script);
  //       script.onload = function () {
  //         updateNavbarContent();
  //       };
  //     })
  //     .catch((error) => console.error("Error loading the navbar:", error));
  // }

  function initializeI18n() {
    loadTranslations().then((resources) => {
      console.log("Translations loaded:", resources);
      const savedLanguage = getLanguageFromLocalStorage();
      i18next.init(
        {
          lng: savedLanguage,
          resources: resources,
        },
        function (err, t) {
          if (err) {
            console.error("Error initializing i18next", err);
            return;
          }
          updateContent(); // Update content including hover texts after initialization
        }
      );
    });
  }

  function loadTranslations() {
    return Promise.all([
      fetch("assets/js/translations/en.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/sp.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/pt.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/fr.json").then((response) =>
        response.json()
      ),
    ]).then(([en, sp, pt, fr]) => ({
      en: { translation: en },
      sp: { translation: sp },
      pt: { translation: pt },
      fr: { translation: fr },
    }));
  }

  function saveLanguageToLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  function getLanguageFromLocalStorage() {
    return localStorage.getItem("language") || "sp";
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err) {
      if (err) {
        console.error("Error changing language", err);
        return;
      }
      updateContent(); // Ensure content is updated including hover texts
      saveLanguageToLocalStorage(lng);

      const languageSelector = document.querySelector(".language-selector");
      if (languageSelector) {
        languageSelector.classList.remove("active");
      }
    });
  };

  document.addEventListener("click", function (event) {
    const languageSelector = document.querySelector(".language-selector");
    const dropbtn = document.querySelector(".dropbtn");

    if (languageSelector && dropbtn) {
      if (event.target === dropbtn) {
        languageSelector.classList.toggle("active");
      } else if (!languageSelector.contains(event.target)) {
        languageSelector.classList.remove("active");
      }
    }
  });

  initializeI18n();
  // loadNavbar();
});
