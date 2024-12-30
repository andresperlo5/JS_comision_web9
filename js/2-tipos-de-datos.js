/*
Tipos de datos JS
Strings - Cadena de texto - 'Texto'
Number - Numeros - 20 - 20.00
Booleanos - True o False
Array - Arreglos - [string-number-booleano-array]
Object- Objectos - {Propiedades - Clave:valor}*/
/* String */
let nombreDelUsuario = "Andres";
/* Length - cuenta los caracteres de una variable */
console.log(nombreDelUsuario.length);
const apellidoDelUsuario = "Perlo";

console.log(nombreDelUsuario, apellidoDelUsuario);
console.log(
  "Bienvenido" +
    " " +
    nombreDelUsuario +
    " " +
    apellidoDelUsuario +
    " " +
    "a mi pagina"
);

console.log(
  "Bienvenido " + nombreDelUsuario + " " + apellidoDelUsuario + " a mi pagina"
);

/* AltGr + } */
/*interpolar ${nombreDelUsuario} */
console.log(`Bienvenido ${nombreDelUsuario} ${apellidoDelUsuario} a mi pagina`);

/* Prompt -  */
// let nombre = prompt("Ingre su nombre");
// let apellido = prompt("Ingre su apellido");
// let edadDelUsuario = prompt("Ingrese su edad");
// console.log(edadDelUsuario);
// nombreDelUsuario = "Julian";
// console.log(nombreDelUsuario);

// let edadDelUsuario = Number(prompt("Ingrese su edad"));
// console.log(edadDelUsuario);

/* '23' - 23 
NaN - Not a Number
parseInt - Numeros enteros
parseFloat - Numeros decimales y enteros - cuando ingresan una letra muestra parte del numero hasta la letra
Number - Numeros enteros y decimales - cuando ingresan una letra muestra un mensaje de NaN
*/

// let numero = (10.554656665474987897897).toFixed(2);
// console.log(Number(numero));

// let numero1 = prompt("Ingrese el primer numero");
// let numero2 = prompt("Ingrese un segundo numero");

// console.log(Number(numero1) + Number(numero2));
// console.log(numero1 - numero2);
// console.log(numero1 * numero2);
// console.log(numero1 / numero2);

// alert("Hola comision web 9");\
let nombre = prompt("Ingrese su nombre");
document.write(
  `<h1>Hola <strong><u><i>${nombre}</i></u></strong> bienvenido a la comision web 9</h1>`
);
