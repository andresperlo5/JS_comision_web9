/* Herencia */
/* class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perro {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
  }
} */

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

class Roles extends Persona {
  constructor(nombre, apellido, dni, domicilio, rol) {
    super(nombre, apellido, dni, domicilio);
    this.rol = rol;
  }

  mostrarRol() {
    console.log(this.rol);
  }
}
const persona = new Persona("Andres", "Perlo", "12345678", "las talitas");
const rol = new Roles(
  "Andres",
  "Perlo",
  "12345678",
  "las talitas",
  "administrador"
);

//console.log(persona.mostrarRol());
//console.log(rol.saludar());

/* 
Clase de vehículos: Crear una clase base Vehiculo y subclases como Auto y Moto. Agregar propiedades específicas como marca o tipo de combustible.

Tienda virtual: Crear una clase Producto y subclases Ropa y Electrodomestico. Agregar métodos para calcular precios con descuento.

Videojuego: Crear una clase base Personaje y subclases como Guerrero y Mago, cada una con métodos y propiedades únicas.

*/
