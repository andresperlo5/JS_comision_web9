/* Condiciones */
/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

/* '16' == 16 - solo el valor */
/* '16' === 16 - es el valor + el tipo de dato */

/* let edad = prompt("Ingresa tu edad");
if (Number(edad)) {
  if (edad >= 18 && edad <= 75) {
    alert("Puedes tener tu licencia");
  } else if (Number(edad) === 16) {
    alert("Podria tener licencia con la autorizacion de los padres.");
  } else {
    alert("No puedes tener tu licencia");
  }
} else {
  alert("Ingresaste un dato incorrecto");
} */

/* Valores de tipo false
  0 - "" - false - undefined  - null
  */
/* 
let nombre = "a";
let apellido = "";

if (!nombre) {
  alert("campo vacio");
} */
/* Ternario
? - es el if
: - es el else
*/

/* let nombre = "";

!nombre ? console.log("campo vacio") : console.log("tiene algo");

!nombre && console.log("campo vacio"); */

/* Switch */
/* 
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/

/* Escribir un programa que solicite una nota (número) de 0  a 10. */
/* const nota = prompt("Ingrese una nota (0 a 10)"); */
/* NaN - not a number */

/* || or o  - && */

/* if (!nota || nota === " " || isNaN(Number(nota))) {
  alert("Introduce un número válido");
} else {
  if (Number(nota) >= 0 && Number(nota) <= 10) {
    if (Number(nota) >= 0 && Number(nota) <= 2) {
      alert("Muy deficiente");
    } else if (Number(nota) === 3 || Number(nota) === 4) {
      alert("Insuficiente");
    } else if (Number(nota) === 5 || Number(nota) === 6) {
      alert("Suficiente");
    } else if (Number(nota) === 7) {
      alert("Bien");
    } else if (Number(nota) === 8 || Number(nota) === 9) {
      alert("Notable");
    } else if (Number(nota) === 10) {
      alert("Sobresaliente");
    }
  } else {
    alert("Fuera del rango de notas (0 a 10)");
  }
} */

/* Switch */
/* nota = 3 */
/* switch (Number(nota)) {
  case 0:
    alert("Muy deficiente");
    break;
  case 1:
    alert("Muy deficiente");
    break;
  case 2:
    alert("Muy deficiente");
    break;
  case 3:
    alert("Insuficiente");
    break;
  case 4:
    alert("Insuficiente");
    break;
  case 5:
    alert("Suficiente");
    break;
  case 6:
    alert("Suficiente");
    break;
  case 7:
    alert("Bien");
    break;
  case 8:
    alert("Notable");
    break;
  case 9:
    alert("Notable");
    break;
  case 10:
    alert("Sobresaliente");
    break;

  default:
    alert("Fuera del rango de notas (0 a 10)");
    break;
} */

/* switch - true  */
/* if (!nota || nota === " " || isNaN(Number(nota))) {
  alert("Introduce un número válido");
} else {
  switch (true) {
    case Number(nota) >= 0 && Number(nota) <= 2:
      alert("Muy deficiente");
      break;
    case Number(nota) === 3 || Number(nota) === 4:
      alert("Insuficiente");
      break;
    case Number(nota) === 5 || Number(nota) === 6:
      alert("Suficiente");
      break;
    case Number(nota) === 7:
      alert("Muy deficiente");
      break;
    case Number(nota) === 8 || Number(nota) === 9:
      alert("Insuficiente");
      break;
    case Number(nota) === 10:
      alert("Suficiente");
      break;

    default:
      alert("Fuera del rango de notas (0 a 10)");
      break;
  }
}
 */

/* Fecha actual */
/* const fecha = new Date().getDay();

switch (fecha) {
  case 0:
    alert("Hola hoy es domingo");
    break;
  case 1:
    alert("Hola hoy es lunes");
    break;
  case 2:
    alert("Hola hoy es martes");
    break;
  case 3:
    alert("Hola hoy es miercoles");
    break;
  case 4:
    alert("Hola hoy es jueves");
    break;
  case 5:
    alert("Hola hoy es viernes");
    break;
  case 6:
    alert("Hola hoy es sabado");
    break;

  default:
    alert("ERROR: Dia incorrecto");
    break;
}
 */
