document.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector("#prices2 .card");
  if (firstCard) {
    firstCard.classList.add("active");
  }

  document.querySelectorAll("#prices2 .card").forEach((card) => {
    card.addEventListener("click", () => {
      document
        .querySelectorAll("#prices2 .card")
        .forEach((c) => c.classList.remove("active"));

      card.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector("#prices3 .card");
  if (firstCard) {
    firstCard.classList.add("active");
  }

  document.querySelectorAll("#prices3 .card").forEach((card) => {
    card.addEventListener("click", () => {
      document
        .querySelectorAll("#prices3 .card")
        .forEach((c) => c.classList.remove("active"));

      card.classList.add("active");
    });
  });
});
