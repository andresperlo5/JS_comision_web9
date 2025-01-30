/* JSON - JavaScript Object Notation */
const persona = {
  nombre: "Andres",
  apellido: "Perlo",
  saludar: () => {},
};
console.log(persona);
//JSON.stringify() - transforma un objeto a string
//JSON.parse(); - transforma un string a objeto

const objetoAstring = JSON.stringify(persona);
const stringAobjecto = JSON.parse(objetoAstring);
console.log(objetoAstring);
console.log(stringAobjecto);

/* const saludar = () => {
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}; */

//----------------------------------------------------
