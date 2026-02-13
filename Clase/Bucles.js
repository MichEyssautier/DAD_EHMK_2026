// bucles

console.log("\n=== EJERCICIO 4: for ===");

// let i = 1; Inicio
// i <= 5; Condición de continuación
// i++ Incremento

for (let i = 1; i <= 50; i++) {
    console.log("Número:", i);
}

for (let i = 1; i <= 50; i += 5) {
    console.log("Número mas 5:", i);
}

console.log("\n=== EJERCICIO 4: ARRAYS ===");

let frutas = ["manzana", "banana", "cereza", "durazno", "uva"];

console.log("Frutas:", frutas);
console.log("Cantidad de frutas:", frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta en posición", i + ":", frutas[i]);
}

console.log("\n=== EJERCICIO 5: ARRAYS MODIFICACION ===");

frutas = ["manzana", "banana"];

console.log("Frutas:", frutas);
console.log("Cantidad de frutas:", frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta en posición", i + ":", frutas[i]);
}