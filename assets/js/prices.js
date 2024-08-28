const btnMonthly = document.getElementById("prices_btn_monthly");
const btnAnnual = document.getElementById("prices_btn_annual");

const priceMisterioso = document.getElementById("misterioso-price");
const priceInspecciones = document.getElementById("inspecciones-price");
const priceMonitoreos = document.getElementById("monitoreos-price");
const priceEncuestas = document.getElementById("encuestas-price");
const priceAuditorias = document.getElementById("auditorias-price");

// Valores de los precios para pago mensual y anual
const monthlyPrices = {
  misterioso: "18<span class='span-numb'>75</span>",
  inspecciones: "31<span class='span-numb'>25</span>",
  monitoreos: "18<span class='span-numb'>75</span>",
  encuestas: "3<span class='span-numb'>15</span>",
  auditorias: "43<span class='span-numb'>75</span>",
};

const annualPrices = {
  misterioso: "15<span class='span-numb'></span>",
  inspecciones: "25<span class='span-numb'></span>",
  monitoreos: "15<span class='span-numb'></span>",
  encuestas: "2<span class='span-numb'>50</span>",
  auditorias: "35<span class='span-numb'></span>",
};

// Función para cambiar los precios
function changePrices(prices) {
  priceMisterioso.innerHTML = prices.misterioso;
  priceInspecciones.innerHTML = prices.inspecciones;
  priceMonitoreos.innerHTML = prices.monitoreos;
  priceEncuestas.innerHTML = prices.encuestas;
  priceAuditorias.innerHTML = prices.auditorias;
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
