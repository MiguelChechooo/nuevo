import {vehiculos} from "./data.js"


console.log(vehiculos)

const container = document.getElementById('carros')
leerData(vehiculos)

function leerData(){
    vehiculos.forEach(tin => {
    const {id,nombre,descripcion,imagen} = tin;
    const card =document.getElementById('tintin')

    card.innerHTML= `
    <h1>${nombre}</h1>
    <img id= img src=${imagen}>
    <p> ${descripcion}</p>
    `

container.appendChild(card)
});
  
}