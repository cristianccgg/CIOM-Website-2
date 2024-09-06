const btnMonthly = document.getElementById("prices_btn_monthly");
const btnAnnual = document.getElementById("prices_btn_annual");

const priceBasico = document.getElementById("basico-price");
const priceAvanzado = document.getElementById("avanzado-price");
const priceProfesional = document.getElementById("profesional-price");

const monthlyPrices = {
  basico: "19",
  avanzado: "32",
  profesional: "38",
};

const annualPrices = {
  basico: "15",
  avanzado: "25",
  profesional: "30",
};

function changePrices(prices) {
  priceBasico.innerHTML = prices.basico;
  priceAvanzado.innerHTML = prices.avanzado;
  priceProfesional.innerHTML = prices.profesional;
}

btnMonthly.addEventListener("click", function () {
  changePrices(monthlyPrices);
  btnMonthly.classList.add("btn-primary");
  btnMonthly.classList.remove("btn-secondary");
  btnAnnual.classList.add("btn-secondary");
  btnAnnual.classList.remove("btn-primary");
});

btnAnnual.addEventListener("click", function () {
  changePrices(annualPrices);
  btnAnnual.classList.add("btn-primary");
  btnAnnual.classList.remove("btn-secondary");
  btnMonthly.classList.add("btn-secondary");
  btnMonthly.classList.remove("btn-primary");
});
