/* Funcion Constructora */
function Persona(nombre, apellido, dni, domicilio) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.domicilio = domicilio;

  this.saludar = function () {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  };
}

const persona = new Persona("Andres", "Perlo", "12345678", "Las talitas");

console.log(persona);
