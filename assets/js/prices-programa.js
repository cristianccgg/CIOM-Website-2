const btnMonthly = document.getElementById("prices_btn_monthly");
const btnAnnual = document.getElementById("prices_btn_annual");

const priceMisterioso = document.getElementById("misterioso-price");
const priceInspecciones = document.getElementById("inspecciones-price");
const priceMonitoreos = document.getElementById("monitoreos-price");

// Valores de los precios para pago mensual y anual
const monthlyPrices = {
  misterioso: "356<span class='span-numb'>25</span>",
  inspecciones: "243<span class='span-numb'>75</span>",
  monitoreos: "118<span class='span-numb'>75</span>",
};

const annualPrices = {
  misterioso: "285<span class='span-numb'></span>",
  inspecciones: "195<span class='span-numb'></span>",
  monitoreos: "95<span class='span-numb'></span>",
};

// Función para cambiar los precios
function changePrices(prices) {
  priceMisterioso.innerHTML = prices.misterioso;
  priceInspecciones.innerHTML = prices.inspecciones;
  priceMonitoreos.innerHTML = prices.monitoreos;
}

// Event listeners para los botones
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
