/* Array - Object */
const alumnos = [
  {
    id: 1,
    nombre: "Nahuel",
    apellido: "Jimenez",
  },
  {
    id: 2,
    nombre: "Nahuel",
    apellido: "Jimenez",
  },
  {
    id: 3,
    nombre: "Claudio",
    apellido: "Medrano",
  },
  {
    id: 4,
    nombre: "Claudio",
    apellido: "Medrano",
  },
];

//LS
/* const alumnosString = JSON.stringify(alumnos);
localStorage.setItem("alumnos", alumnosString); */
localStorage.setItem("alumnos", JSON.stringify(alumnos));
/* const alumnosLS = localStorage.getItem("alumnos");
const alumnosParse = JSON.parse(alumnosLS); */
const alumnosLS = JSON.parse(localStorage.getItem("alumnos"));
//console.log(alumnosLS);

//const idUsuario = alumnos.length + 1;
//console.log(idUsuario);
let id = alumnos[alumnos.length - 1]?.id + 1 || 1;
/* let idJS = crypto.randomUUID();
console.log(idJS); */
console.log(id);
//UUId4
