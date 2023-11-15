import {vehiculos} from "./data.js"


console.log(vehiculos)

const container = document.getElementById('tintin')
leerData(vehiculos)

function leerData(){
    vehiculos.forEach(tin => {
    const {id,nombre,descripcion,imagen} = tin;
    const card =document.createElement('div');

    card.innerHTML= `
    <h1>${nombre}</h1>
    <img id= img src=${imagen}>
    <p> ${descripcion}</p>
    `

container.appendChild(card)
});
  
}