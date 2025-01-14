/* Funciones */
//const nombre = prompt("Ingrese su nombre");
/* Declarativas - Anonimas - Funciones Flechas - IIFE */
/* Funcion Declarativa */
function suma() {
  /* Bloque de codigo */
  return 1 + 2;
}

/* Funcion Anonima */
const resta = function () {
  return 6 - 3;
};

/* Funciones Flechas */
const multiplicar = () => 10 * 9;

/* IIFE */
(function () {
  //bloque de codigo
})();

/* funciones recursivas y generadoras investigar */

/* Scope - Ambiente */
let nombre = "Andres"; /* Ambiente Global */
/* let nombre = "Jose"; */

const formulario = () => {
  /* Ambiente Local */
  let apellido = "Perlo";
  console.log(nombre);
};

//if (nombre) {
/*
   LET / CONST - Respetan el ambiente local
   VAR - Sale del ambiente local al global
 */
//var apellido = "Perlo";
//let nombre = "Jose";
//}

//console.log(nombre);
//console.log(apellido);

//console.log(apellido);
//formulario();

const numeroAleatorio = () => {
  return Math.round(Math.random() * 20);
};

const numeroUsuario = () => {
  const numeroUsuario = Number(prompt("Ingresa un numero del 1 al 20"));
  return numeroUsuario;
};

const juego = () => {
  const numeroMaquina = numeroAleatorio();
  const numeroPersona = numeroUsuario();

  if (numeroMaquina === numeroPersona) {
    alert("Ganaste");
    // return "Ganaste";
  } else {
    alert("Sos un perdedor");
    // return "Sos un perdedor";
  }
};

/* Parametros - Callback  */
