let categoria = "infantil";
let array = [];

const mostrarProductos = () => {
  document.getElementById("main").innerHTML = "";

  array = JSON.parse(localStorage.getItem("postres"))
  if(array === null){
    array = [];
  } 
  else {
    array.forEach(element => {
      if(element.categoria === categoria){
        document.getElementById("main").innerHTML += `<div class="container" id"${element.nombre}">
        <h2 id=nombre">${element.nombre}</h2>
        <p class="descripcion">${element.descripcion}</p>
        <h3 class="precio">${element.precio}</h3><img src="./cruz.png" alt="" class="close-icon"id=${element.nombre}">
        </div>`
      }
      
    })
  }
}
document.addEventListener("DOMContentLoaded", mostrarProductos())