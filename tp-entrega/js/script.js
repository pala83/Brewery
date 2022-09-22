"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const btnVerif = document.querySelector("#btn-verif");
    const popup = document.querySelector(".popup");
    const altoAhi = document.querySelector(".verificador img");
    const contador = document.querySelector("#odometer");
    odometer(contador);

    //darAcceso();
    btnVerif.addEventListener("click",(e)=>{
        let fecha = e.target.previousElementSibling.value;
        console.log(retornarEdad(fecha));
        if(retornarEdad(fecha) < 18 && (retornarEdad(fecha)!==""))
            window.open("https://www.danonino.com.ar/");
        else{
            popup.classList.add("desaparecer");
            altoAhi.classList.add("desaparecer-translate");
            setTimeout(()=>{
                document.querySelector(".verificador").remove();
            }, 1000);
            document.querySelector(".container").classList.remove("blur");
            document.querySelector(".head-nav").classList.remove("blur");
        }
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
});

function odometer(elem){
    let inicio = Math.floor(Math.random()*10000)+1000;
    elem.innerHTML = inicio;
    setInterval(() => {
        inicio = inicio + Math.floor(Math.random()*1000)+50;
        elem.innerHTML = inicio;
    }, 5000);
}

function retornarEdad(fecha){
    let hoy = new Date();
    let cumple = new Date(fecha);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    let mes = hoy.getMonth() - cumple.getMonth();
    if(mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())){
        edad--;
    }
    return edad;
}

