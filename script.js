// Referencias a los elementos del DOM
const inputTemp = document.getElementById("inputTemp");
const scaleSelect = document.getElementById("scaleSelect");

const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
const rankineEl = document.getElementById("rankine");
const reaumurEl = document.getElementById("reaumur");

// Función para actualizar las conversiones
function updateTemperatures() {
    const temp = parseFloat(inputTemp.value);
    const scale = scaleSelect.value;

    if (isNaN(temp)) return;

    let tempCelsius;
    switch (scale) {
        case "C":
            tempCelsius = temp;
            break;
        case "F":
            tempCelsius = (temp - 32) * 5 / 9;
            break;
        case "K":
            tempCelsius = temp - 273.15;
            break;
        case "R":
            tempCelsius = (temp - 491.67) * 5 / 9;
            break;
        case "Re":
            tempCelsius = temp * 5 / 4;
            break;
    }

    // Actualizar valores convertidos
    celsiusEl.textContent = tempCelsius.toFixed(2);
    fahrenheitEl.textContent = (tempCelsius * 9 / 5 + 32).toFixed(2);
    kelvinEl.textContent = (tempCelsius + 273.15).toFixed(2);
    rankineEl.textContent = ((tempCelsius + 273.15) * 9 / 5).toFixed(2);
    reaumurEl.textContent = (tempCelsius * 4 / 5).toFixed(2);
}

// Eventos
inputTemp.addEventListener("input", updateTemperatures);
scaleSelect.addEventListener("change", updateTemperatures);

