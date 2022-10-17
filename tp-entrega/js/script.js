"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const contador = document.querySelector("#odometer");
    odometer(contador);

    });
    /*
    function darAcceso(){
        popup.classList.add("desaparecer");
        altoAhi.classList.add("desaparecer-translate");
        setTimeout(()=>{
            document.querySelector(".verificador").remove();
        }, 1000);
        document.querySelector(".container").classList.remove("blur");
        document.querySelector(".head-nav").classList.remove("blur");
    }
    */

function odometer(elem){
    let inicio = Math.floor(Math.random()*10000)+1000;
    elem.innerHTML = inicio;
    setInterval(() => {
        inicio = inicio + Math.floor(Math.random()*1000)+50;
        elem.innerHTML = inicio;
    }, 5000);
}
