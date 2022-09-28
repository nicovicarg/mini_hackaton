//Variales globales

const formulario = document.getElementById("formulario");
const carta = document.getElementById("carta");
let array = []







//Funciones

const crearProducto = (nombre, descripcion, precio) => {
  let objeto = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio
  };
  array.push(objeto);
  return objeto;
}

const guardarProducto = () => {
  localStorage.setItem("postres", JSON.stringify(array));
  mostrarProductos();
}

const mostrarProductos = () => {
  carta.innerHTML = "";

  array = JSON.parse(localStorage.getItem("postres"))
  if(array === null){
    array = [];
  } else {
    array.forEach(element => {
      carta.innerHTML += `<div class="container" id"${element.nombre}">
      <h2 id=nombre">${element.nombre}</h2>
      <p class="descripcion">${element.descripcion}</p>
      <h3 class="precio">${element.precio}</h3><img src="./cruz.png" alt="" class="close-icon"id=${element.nombre}">
    </div>`
    })
  }
}

const eliminarProducto = (nombre) =>{
  let indexArray; 

  array.forEach((element, index)=> {
    if(element.nombre == nombre){
      indexArray= index;
    }

    
    array.splice(indexArray, 1);
    guardarProducto();
  })
}


//EventListener

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let precio = document.getElementById("precio").value;

  crearProducto(nombre, descripcion, precio);
  guardarProducto();

  formulario.reset()
  
});

document.addEventListener("DOMContentLoaded", mostrarProductos())

carta.addEventListener("click", (e)=> {
  e.preventDefault();

  let nombre = e.path[1].childNodes[1].innerHTML;
  
  eliminarProducto(nombre);
})