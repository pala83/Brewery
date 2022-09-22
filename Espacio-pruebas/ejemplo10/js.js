const container = document.querySelector(".container"),
      col = document.querySelector(".counter"),
      odometer = document.getElementById("odometer");

let inicio = 0;

setInterval(() => {
    inicio = inicio + Math.floor(Math.random()*1000)+50;
    odometer.innerHTML = inicio;
}, 1000);