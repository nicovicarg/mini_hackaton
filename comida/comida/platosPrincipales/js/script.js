let disparador = document.getElementById("checked");
let resultado = 0;
let sumatoria = 0;
let array= []
const guardarDB = ()=> {
  localStorage.setItem("sumatoria",JSON.stringify(sumatoria));
};

function comprobar(){
  let contador = document.getElementById("contador");
  let innerText = document.getElementById("contador");
  contador.style.backgroundColor = "#00a900";
  resultado += 1;
  innerText.innerText = resultado;
  sumatoria += 2660;
  document.getElementById("sumatoria").innerText = `$ ${sumatoria}`;
  guardarDB();
}
function sumar(){
  let nombre = document.getElementById("terneraProvenzal").innerHTML.indexOf("<h2>");
  console.log(nombre)
}

disparador.onclick= sumar;