let btn = document.getElementById("sign-in");
let usuario = "";
let contraseña = "";


function validate(){
  usuario = document.getElementById("usuario").value;
  contraseña = document.getElementById("contraseña").value;

  if(usuario == '123' && contraseña == '123'){
    event.preventDefault();
    window.location.href= "./menu.html";
  }else if(usuario === "admin" && contraseña === "admin"){
    event.preventDefault();
    window.location.href= "./menu.html";
  }
  if(document.location.href === "./menu.html"){
    let mensaje = "logueado"
    console.log(document.getElementById("asd"));
  }
}
let loguear = validate;
/* function loguear(){
  usuario = document.getElementById("usuario").value
  contraseña = document.getElementById("contraseña").value;

  if(usuario=="nicolas"&&contraseña=="1234"){
    window.location.href ="./menu.html/";
    

  } 
  else {
    alert("Le erraste XD")
  }
  
}*/
/*let btn= document.getElementById("sign-in");
let usuario="";
let contraseña="";
function signIn(){
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  
  console.log(usuario);
  console.log(contraseña);

  
}

let loguear = (signIn());*/


btn.onclick= loguear;
