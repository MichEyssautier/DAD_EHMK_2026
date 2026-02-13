console.log("Hola mundo"); //Funcionalidad basica de salida en la consola 

console.log("===Strings (cadenas de texto)===");

let nombre = "Michel"; //Variable para almacenar el nombre
let apellido = " Eyssautier"; //Variable para almacenar el apellido
let nombreCompleto = nombre + apellido; //Concatenacion de cadenas
console.log("Mi nombre completo es " + nombreCompleto);

nombre = "Karina"; // Reasignacion de la variable nombre
console.log("Ahora mi nombre es " + nombre);

//**El punto y coma ya no es necesario para programar con JS, pero tambien eran parte de la sintaxis**

//Dado estas salidas, crea las variables que se necesita (TODOS SON NUMBERS)

console.log("===Numbers===");

let edad = 30;
let altura = 1.56;
let temperatura = 9;
let resultadoEdad = edad + 5;

console.log("Tengo " + edad + " años");
console.log("Mi altura es ", altura, " metros");
console.log("Temperatura ", temperatura, " °C");
console.log("En 5 años tendré: ", resultadoEdad, " años");

console.log("===Boolean (true/false)===");

let esVerdadero = true; //Variable booleana
let esFalso = false; //Variable booleana
let cadenaDeValor = esVerdadero && esFalso; //Operacion AND entre booleanos

console.log("Esto es verdadero: ", esVerdadero);
console.log("Esto es falso: ", esFalso);
console.log("El resultado de la operacion AND es: ", cadenaDeValor);

let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia; //Operador AND funciona cuando ambas condiciones son verdaderas
//OR puedeConducir = esMayorDeEdad || tieneLicencia
//NOR puedeConducir = !(esMayorDeEdad || tieneLicencia)

console.log("Es mayor de edad?", esMayorDeEdad);
console.log("Tiene licencia?", tieneLicencia);
console.log("Puede conducir?", puedeConducir);



