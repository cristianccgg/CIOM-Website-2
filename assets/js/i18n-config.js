document.addEventListener("DOMContentLoaded", function () {
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
          if (err) return console.error("Error initializing i18next", err);
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

  function loadNavbar() {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("body").insertAdjacentHTML("afterbegin", data);
        const script = document.createElement("script");
        script.src = "assets/js/navbar.js";
        document.body.appendChild(script);
        script.onload = function () {
          updateNavbarContent();
        };
      })
      .catch((error) => console.error("Error loading the navbar:", error));
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err) {
      if (err) return console.error("Error changing language", err);
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
  loadNavbar();
});
