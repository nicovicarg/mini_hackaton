let body = document.getElementById("body");
array= [];
function tomar(){
  event.preventDefault();
  body.style.backgroundImage = `url('./carpetadeprueba/${document.getElementById("imagen").files[0].name}')`;
  console.log(document.getElementById("imagen").files[0].name);
  console.log(array)
}
let btn = document.getElementById("btn");

btn.onclick = tomar;