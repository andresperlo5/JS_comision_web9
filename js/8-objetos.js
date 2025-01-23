/* Objetos */
/* let persona = {
  nombre: "Andres",
  apellido: "Perlo",
  edad: 33,
  domicilio: {
    localidad: "las talitas",
    provincia: "tucuman",
    pais: "Argentina",
  },
  dni: "12345678",
  notas: [10, 5, 2, 3],
}; */

/* Obtener una propiedad */
/* console.log(persona.apellido);
console.log(persona["edad"]);
console.log(persona.domicilio.localidad);
console.log(persona["domicilio"]["localidad"]); */

/* Agregar y/o editar una propiedad */
/* persona.sexo = "Masculino";
persona.edad = 32; */
//persona["edad"] = 32;
/* console.log(persona); */

/* Eliminar una propiedad */
/* delete persona.domicilio;
console.log(persona); */
/* 
for (let clave in persona) {
  console.log(persona[clave]);
}
 */

/* Object.keys(persona).forEach((clave) => console.log(persona[clave]));
 */

//investigacion: values - entries

/* let auto = {
  marca: "audi",
  modelo: "a5",
  puertas: 3,
  color: "gris",
  anio: 2024,
  encendido: false,
  encender: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("Auto apagado");
    } else {
      this.encendido = true;
      console.log("Auto prendido");
    }
  },
}; */

/* let auto = {
  marca: "audi",
  modelo: "a5",
  puertas: 3,
  color: "gris",
  anio: 2024,
  encendido: false,
  encender: () => {
    if (this.encendido) {
      this.encendido = false;
      console.log("Auto apagado");
    } else {
      this.encendido = true;
      console.log("Auto prendido");
    }
  },
}; */

/* let alumnos = [];
let alumno = {
  nombre: "",
  apellido: "",
  direccion: "",
  cursos: "",
  notas: "",
  promedio: "",
};

const agregarAlumno = () => {
  const nombreAlumno = prompt("Ingrese nombre del alumno");
  const apellidoAlumno = prompt("Ingrese apellido del alumno");

  alumno.nombre = nombreAlumno;
  alumno.apellido = apellidoAlumno;

  alumnos.push(alumno);
};

const listaDeAlumnos = () => {
  console.log(alumnos);
}; */
