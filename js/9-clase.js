/* Clase */
const personas = [];
class Persona {
  constructor(nombre, apellido, dni, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
  }

  saludar() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

const persona = new Persona("Andres", "Perlo", "12345678", "Las talitas");

const persona2 = new Persona("Andres", "Perlo", "12345678", "Centro");

console.log(persona);
console.log(persona2);

/* const crearNuevaPersona = () => {
  const nombre = prompt("Ingresar nombre");
  const apellido = prompt("Ingresar apellido");
  const dni = prompt("Ingresar dni");
  const domicilio = prompt("Ingresar domicilio");

  const persona = new Persona(nombre, apellido, dni, domicilio);

  personas.push(persona);
};

const mostrarPersonas = () => {
  console.log(personas);
}; */
