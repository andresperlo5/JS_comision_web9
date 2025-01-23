/* Prototype */
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

  mostrarDomicilio() {
    console.log(`mi domicilio es: ${this.domicilio}`);
  }
}

const persona = new Persona("Andres", "Perlo", "12345678", "Las talitas");
const persona2 = new Persona("Andres", "Perlo", "12345678", "Centro");

console.log(persona);
console.log(persona2);

/* 
Persona.prototype.mostrarDomicilio = function () {
  console.log(`mi domicilio es: ${this.domicilio}`);
};
 */

console.log(persona.mostrarDomicilio());
console.log(persona2.mostrarDomicilio());
