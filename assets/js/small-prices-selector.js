document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar la primera carta al cargar la página
  const firstCard = document.querySelector("#prices2 .card");
  if (firstCard) {
    firstCard.classList.add("active");
  }

  // Agregar evento de clic para cambiar la selección
  document.querySelectorAll("#prices2 .card").forEach((card) => {
    card.addEventListener("click", () => {
      // Eliminar la clase activa de todas las cartas
      document
        .querySelectorAll("#prices2 .card")
        .forEach((c) => c.classList.remove("active"));
      // Añadir la clase activa a la carta seleccionada
      card.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar la primera carta al cargar la página
  const firstCard = document.querySelector("#prices3 .card");
  if (firstCard) {
    firstCard.classList.add("active");
  }

  // Agregar evento de clic para cambiar la selección
  document.querySelectorAll("#prices3 .card").forEach((card) => {
    card.addEventListener("click", () => {
      // Eliminar la clase activa de todas las cartas
      document
        .querySelectorAll("#prices3 .card")
        .forEach((c) => c.classList.remove("active"));
      // Añadir la clase activa a la carta seleccionada
      card.classList.add("active");
    });
  });
});
