"use strict";

const sucursales = ["Brewery Playa Grande","Brewery Constitución", "Brewery San Telmo", "Brewery Caballito", "Brewery Las Lomitas", "Brewery Campana", "Brewery City Bell", "Brewery Quilmes", "Brewery Berazategui", "Parador Brewery La Plata", "Brewery  La Plata", "Brewery San Isidro", "Brewery Ramos Mejía", "Brewery Bahía Blanca", "Parador Brewery Vicente López", "Brewery Pilar", "Parador Brewery Córdoba", "Brewery Córdoba", "Parador Brewery Villa del Parque", "Brewery Naón", "Brewery Ituzaingó", "Brewery Tucuman", "Brewery Necochea", "Brewery Rosario", "Parador Brewery Villa Urquiza", "Parador Brewery Rosario", "Brewery Calle Olavarria", "Brewery Tandil"];

document.addEventListener("DOMContentLoaded",()=>{
    const url = window.location.pathname.split("/");
    const path = url[url.length-1].slice(0,-5)
    switch(path){
        case"index":
            const contador = document.querySelector("#odometer");
            odometer(contador);
        break;
        case"sucursales":
            let pagina=1;
            const comentarios = document.querySelector("#idComentarios");
            const paginadoIzquierda = document.querySelector("#pagIzq");
            paginadoIzquierda.addEventListener("click",()=>{
                if(pagina>1){
                    pagina-=1;
                    comentarios.innerHTML = "";
                    getUsuarios(pagina).then(users=>{
                        for(const user of users.data){
                            let comentario = generarComentario(user);
                            comentarios.appendChild(comentario);
                        }
                    });
                }
            });
            const paginadoDerecha = document.querySelector("#pagDer");
            paginadoDerecha.addEventListener("click",()=>{
                if(pagina<3){
                    pagina+=1;
                    comentarios.innerHTML = "";
                    getUsuarios(pagina).then(users=>{
                        for(const user of users.data){
                            let comentario = generarComentario(user);
                            comentarios.appendChild(comentario);
                        }
                    });
                }
            });
            getUsuarios(pagina).then(users=>{
                for(const user of users.data){
                    let comentario = generarComentario(user);
                    comentarios.appendChild(comentario);
                }
            });
        break;
        default:
            console.log("este error no deberia ocurrir");
    }


});

function generarComentario(usuario){
    let card = document.createElement("div");
    let valoracion = '<i class="fi fi-br-beer"></i>';
    for(let i=0; i<Math.floor(Math.random() * 2)+3; i++)
        valoracion+='<i class="fi fi-br-beer"></i>';
    card.innerHTML = `<div class="card">
                        <span class="imagen" style="background: url('${usuario.avatar}') no-repeat center/cover;"></span>
                        <h1>${sucursales[Math.floor(Math.random()*sucursales.length-1)]} <span>@${usuario.first_name}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur, quidem laborum illum eius id quisquam vero accusamus dolor aspernatur, officia aliquid! Illum eius dignissimos, doloremque explicabo optio quia rerum!</p>
                        <span class="valoracion">valoración: ${valoracion}</span>
                    </div>`
    return card;
}

async function getUsuarios(pagina){
    try{
        let respuesta = await fetch(`https://reqres.in/api/users?per_page=4&page=${pagina}`);
        if(respuesta.ok){
            let arreglo = await respuesta.json();
            return arreglo;
        }
    }catch(error){
        console.log(error);
    }
}

function agregarUsuarios(comentarios, usuarios){
    console.log(comentarios);
    console.log(usuarios);
}

function odometer(elem){
    let inicio = Math.floor(Math.random()*10000)+1000;
    elem.innerHTML = inicio;
    setInterval(() => {
        inicio = inicio + Math.floor(Math.random()*1000)+50;
        elem.innerHTML = inicio;
    }, 5000);
}
