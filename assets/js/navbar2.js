document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#navbar2 .menu-icon");
  const closeButton = document.querySelector("#navbar2 .close-icon");
  const menuContainer = document.querySelector(
    "#navbar2 .menu-container-left-text"
  );
  const solucionesButton = document.querySelector("#solucionesDropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const mobileDropdown = document.querySelector(".mobile-dropdown");

  function toggleMenu() {
    menuContainer.classList.toggle("show-menu");
    menuButton.style.display = menuContainer.classList.contains("show-menu")
      ? "none"
      : "block";
    closeButton.style.display = menuContainer.classList.contains("show-menu")
      ? "block"
      : "none";
  }

  function updateDropdownVisibility() {
    if (window.innerWidth < 1376) {
      dropdownMenu.classList.add("d-none");
      mobileDropdown.classList.remove("d-none");
    } else {
      dropdownMenu.classList.remove("d-none");
      mobileDropdown.classList.add("d-none");
    }
  }

  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  solucionesButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    mobileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (
      !mobileDropdown.contains(e.target) &&
      !solucionesButton.contains(e.target)
    ) {
      mobileDropdown.classList.remove("show");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1376) {
      menuButton.style.display = "";
      closeButton.style.display = "none";
      menuContainer.classList.remove("show-menu");
      mobileDropdown.classList.remove("show");
    }
    updateDropdownVisibility();
  });

  updateDropdownVisibility();
});
