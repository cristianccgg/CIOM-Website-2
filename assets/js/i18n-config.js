document.addEventListener("DOMContentLoaded", function () {
  function updateHoverTexts() {
    document
      .querySelectorAll(".cliente-misterioso .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-hover-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          slide.setAttribute("data-hover-text", translation);
        }
      });

    document
      .querySelectorAll(".auditorias-swiper .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-audit-\d+/);
        const key = keyMatch ? keyMatch[0] : null;
      });

    document
      .querySelectorAll(".monitoreo-swiper .swiper-slide")
      .forEach((slide) => {
        const className = slide.classList.value;
        const keyMatch = className.match(/swiper-monitoreo-\d+/);
        const key = keyMatch ? keyMatch[0] : null;

        if (key) {
          const translation = i18next.t(key);
          slide.setAttribute("data-hover-text", translation);
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
        }
      });
  }

  function checkI18nReady() {
    if (i18next.isInitialized) {
      updateContent();
    } else {
      setTimeout(checkI18nReady, 100);
    }
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

  function initializeI18n() {
    loadTranslations().then((resources) => {
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
          updateContent();
        }
      );
    });
  }

  function updateContent() {
    document.querySelectorAll("[id]").forEach(function (el) {
      const id = el.getAttribute("id");
      if (i18next.exists(id)) {
        el.innerHTML = i18next.t(id);
      }
    });

    updateNavbarContent();
    updateHoverTexts();
  }

  function updateNavbarContent() {
    const navbar = document.querySelector("#navbar-container");
    if (navbar) {
      navbar.querySelectorAll("[id]").forEach(function (el) {
        const id = el.getAttribute("id");
        if (i18next.exists(id)) {
          el.innerHTML = i18next.t(id);
        }
      });
    }
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err) {
      if (err) {
        console.error("Error changing language", err);
        return;
      }
      updateContent();
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
});
