document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menuLeftText = document.querySelector(".menu-container-left-text");
  if (
    menuLeftText.style.display === "flex" ||
    menuLeftText.style.display === ""
  ) {
    menuLeftText.style.display = "none";
  } else {
    menuLeftText.style.display = "flex";
  }
});
