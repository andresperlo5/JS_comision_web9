/* Funciones */
//const nombre = prompt("Ingrese su nombre");
/* Declarativas - Anonimas - Funciones Flechas - IIFE */
/* Funcion Declarativa */
/* function suma() {
  Bloque de codigo
  return 1 + 2;
} */

/* Funcion Anonima */
/* const resta = function () {
  return 6 - 3;
}; */

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

/* const formulario = () => {
  //Ambiente Local
  let apellido = "Perlo";
  console.log(nombre);
};
 */
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

/* const numeroAleatorio = () => {
  return Math.round(Math.random() * 20);
}; */

/* const numeroUsuario = () => {
  const numeroUsuario = Number(prompt("Ingresa un numero del 1 al 20"));
  return numeroUsuario;
}; */

/* const juego = () => {
  const numeroMaquina = numeroAleatorio();
  const numeroPersona = numeroUsuario();

  if (numeroMaquina === numeroPersona) {
    alert("Ganaste");
    // return "Ganaste";
  } else {
    alert("Sos un perdedor");
    // return "Sos un perdedor";
  }
}; */

/* Parametros - Argumento - Callback  */
/* 
Parametro - es un valor que viene por variables
Argumento - es un valor real - estatico - hardcodeado
*/
/* const nombreUsuario = "andres123";

const formulario = (
  nombre = "",
  apellido = "",
  dni = 0,
  tyc = false,
  domicilio = ""
) => {
  console.log(nombre);
  console.log(apellido);
  console.log(dni);
  console.log(`${nombre} ${apellido}`);
  console.log(domicilio);
};

formulario("Andres", "Perlo", "123456789", true, "Las talitas");
 */
/* CallBacks */

/* const suma = (a, b) => {
  return a + b;
};

const resultado = (callback) => {
  console.log(callback(1, 2));
};

resultado(suma);
 */
/* metodos de arrays con funciones - callbacks */
/* Metodo = Funcion */

const numerosPares = [20, 4, 16, 28, 16, 16];

/* console.log(numerosPares.sort((a, b) => a - b));
console.log(numerosPares); */

const numerosFiltrados = numerosPares.filter((numero) => numero === 16);

const numerosFind = numerosFiltrados.find((numero) => numero === 16);

/* console.log(numerosFiltrados);
console.log(numerosPares);
console.log(numerosFind); */

/* 
Tarea: 
Sistema básico de gestión de estudiantes
Crea un programa que permita gestionar una lista de estudiantes y sus calificaciones. El programa debe incluir varias funciones que implementen diferentes funcionalidades relacionadas con el manejo de datos. Usa condicionales, bucles, arrays y sus métodos, funciones y callbacks.

*/

/* 
Requisitos del programa
Menú principal:

El programa debe mostrar un menú en la consola donde el usuario pueda elegir entre varias opciones (usando prompt).
Ejemplo de opciones:
Agregar estudiante.
Mostrar estudiantes.
Buscar estudiante por nombre.
eliminar un estudiante
Salir.
Funcionalidades:

Cada opción del menú debe corresponder a una función que implemente la lógica de esa tarea.*/
