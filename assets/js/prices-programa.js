const btnMonthly = document.getElementById("prices_btn_monthly");
const btnSemestral = document.getElementById("prices_btn_semestral");

const priceMisterioso = document.getElementById("misterioso-price");
const priceInspecciones = document.getElementById("inspecciones-price");
const priceMonitoreos = document.getElementById("monitoreos-price");

const monthlyPrices = {
  misterioso: "356<span class='span-numb'>25</span>",
  inspecciones: "243<span class='span-numb'>75</span>",
  monitoreos: "118<span class='span-numb'>75</span>",
};

const semestralPrices = {
  misterioso: "285<span class='span-numb'></span>",
  inspecciones: "195<span class='span-numb'></span>",
  monitoreos: "95<span class='span-numb'></span>",
};

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
  btnSemestral.classList.add("btn-secondary");
  btnSemestral.classList.remove("btn-primary");
});

btnSemestral.addEventListener("click", function () {
  changePrices(semestralPrices);
  btnSemestral.classList.add("btn-primary");
  btnSemestral.classList.remove("btn-secondary");
  btnMonthly.classList.add("btn-secondary");
  btnMonthly.classList.remove("btn-primary");
});
