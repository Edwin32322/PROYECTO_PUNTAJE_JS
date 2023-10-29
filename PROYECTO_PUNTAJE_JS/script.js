const marcoPuntaje = document.querySelector(".puntaje");
let puntajeActual = 0;
const puntajeLimite = 5;
let puntajeCon = document.querySelector('.puntajeCon')
const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i) =>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
})
marcoPuntaje.innerHTML = htmlMapa.join("");
document.querySelectorAll(".item").forEach(item =>{

    item.addEventListener("mouseover", e =>{

        const posicion = item.getAttribute("data-pos");

        if(puntajeActual === parseInt(posicion) +1){
            return;
        }

        for (let index = 0; index <= posicion; index++) {
            const cuadradito = document.querySelector(`.item-${index}`)
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec")
            }
        }
        puntajeActual = parseInt(posicion) + 1
        puntajeCon.innerHTML = "Puntaje: " + puntajeActual
    })
    item.addEventListener("mouseleave", () =>{
        puntajeActual = 0
        document.querySelectorAll(".item").forEach(cuadraditoColor =>{
            if (cuadraditoColor.classList.contains("selec")) {
                cuadraditoColor.classList.remove("selec")
            }
        })
        puntajeCon.innerHTML = "Puntaje: " + puntajeActual
    })
    
    item.addEventListener("click", (e) =>{
        const posicion = item.getAttribute("data-pos")
        console.log("Puntaje: " + puntajeActual)
        puntajeActual = parseInt(posicion) + 1
    }) 
})