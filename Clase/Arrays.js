console.log("=== Array (arreglos/matrices)");

let frutas = ["manzana", "banana", "cereza"]; //Array de frutas
console.log("Frutas disponibles: ", frutas);
console.log("La tercer fruta es: ", frutas[2]);// Accede a la tercer fruta. Recordar que la numeracion inicia en 0

let numeros = [10, 20, 30, 40, 50]; //Array de frutas
console.log("Numeros disponibles: ",numeros);

//Un arreglo en javascript acepta que se mezclen los tipos de variables ingresada (por lo que no es un tipado estricto)
//Pero recordemos que eso no es eficiente en memoria y no es correcto en sintaxis
let mezclados = ["texto", 100, true, 3.14];