/* Promesas */

const promesa = new Promise((resolve, reject) => {
  //resolve - la promesa se cumple
  //reject - la promesa no se cumple
  setTimeout(() => {
    const res = true;
    if (res) {
      resolve("La promesa se cumplio");
    } else {
      reject("La promesa no se cumplio");
    }
  }, 2000);
});

//console.log(promesa);
//then/catch
/* promesa.then((res) => console.log(res)).catch((error) => console.log(error)); */
//then - el camino de la promesa si se resuelve
// catch - el camino de la promesa si hay un error

//fetch - url

/* setTimeout(() => {
  console.log("hola desde el settimeout");
}, 1000); */

/* const productosApi = fetch("https://fakestoreapi.com/products"); */

/* productosApi
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

console.log("hola comision"); */
//async/await

/* const productos = async () => {
  try {
    const productosApi = await fetch("https://fakestoreapi.com/products");
    const res = await productosApi.json();

    // localStorage.setItem('productosApi', JSON.stringify(res))
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}; */
