/* Arrays - Arreglos */
/* [elementos] */
/*  0     1      2    3   4 - Indices - index */
/* [1, 'hola', true, [], {}] */
/* 
let nombreAlumnos = ["Lucas", "Alvaro", "Nahuel", "Claudio"]; */
/* Obtener un elemento */
/* console.log(nombreAlumnos[1]); */

/* Agregar un nuevo elemento - */
/* Push - Agrega el nuevo elemento al final del array */
/* nombreAlumnos.push("Jorge");
nombreAlumnos.push("Estefi"); */
/* unshift */
/* nombreAlumnos.unshift("Nadia"); */
/* slice - splice - investigar*/

/* Borrar un elemento */
/* shift */
/* nombreAlumnos.shift(); */
/* pop */
/* nombreAlumnos.pop();
console.log(nombreAlumnos) */ /* Retorna el index */
/* let indiceNombre = nombreAlumnos.indexOf("Lucas"); */
/* const nombreAlumno = prompt("Ingrese un nombre");

if (indiceNombre === -1) {
  alert("Nombre no encontrado");
} else {
  alert(
    `El nombre encontrado es: ${nombreAlumnos[indiceNombre]} en la posicion numero: ${indiceNombre}`
  );
} */

/* Invertir un array */ /* 
console.log(nombreAlumnos.reverse()); */

/* Includes - True o false */
/* toLowerCase - Minuscula*/
/* console.log("HoLa".toLowerCase()); */
/* toUpperCase - Mayuscula */
/* console.log("HoLa".toUpperCase());
console.log(nombreAlumnos.includes("Jorge")); */

/* Sort - Ordena alfabeticamente los elementos */
/* console.log(nombreAlumnos.sort()); */

let nombreAlumnos = ["Lucas", "Nahuel", "Claudio", "Julian", "Andres"];

for (let i = 0; i < nombreAlumnos.length; i++) {
  const nombre = nombreAlumnos[i];
  console.log(nombre);
}

/* Concat */
const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7, 9];

const numeros = numerosImpares.concat(numerosPares);
console.log(numeros);

/* Join - unir - une el array en un string*/
/* console.log(nombreAlumnos.join("-")); */

/* split - separa un string en un array */
/* console.log("hola como estas?".split(" ")); */
