/* 
LocalStorage - memoria local que usa el navegador
SessionStorage - memoria de la sesion que usa el navegador
 */
/* 
setItem - crear o modificar un dato en LS o SS
getItem - obtener del LS o SS el objeto
removeItem - elimina un dato del LS o SS
*/
/* Crear un dato en LS */
localStorage.setItem("nombre", "andres");
localStorage.setItem("apellido", "perlo");

sessionStorage.setItem("nombre", "andres");
sessionStorage.setItem("apellido", "perlo");

/* Obtener un dato de Ls */
const nombre = localStorage.getItem("nombre");
const apellido = sessionStorage.getItem("apellido");
console.log(nombre);
console.log(apellido);

/* borrar un dato del LS */
localStorage.removeItem("apellido");
sessionStorage.removeItem("apellido");

//-----------------------------------------------------
