// ===== CUESTIONARIO: TIPOS DE DATOS EN JAVASCRIPT =====
// Instrucciones: Completa los ejercicios siguiendo los ejemplos

console.log("=== EJERCICIO 1: NUMBERS ===");
// Ejemplo:
const precioLibro = 250;
console.log("Precio del libro:", precioLibro);
const precioLapiz = 15;
console.log("Precio del lápiz:", precioLapiz);
let edadEstudiante = 40;
console.log("Edad del estudiante:", edadEstudiante);
const numero1 = 8;
const numero2 = 3;
console.log("Suma de numero1 y numero2:", numero1 + numero2);
console.log("Multiplicación de numero1 y numero2:", numero1 * numero2);


console.log("\n=== EJERCICIO 2: STRINGS ===");
// Ejemplo:
const miNombre = "Pedro";
console.log("Mi nombre es:", miNombre);

const tuNombre = "Juan Carlos García";
console.log("Tu nombre es:", tuNombre);

const materiaFavorita = "Programación";
console.log("Mi materia favorita es:", materiaFavorita);


const nombre = "Ana";
const apellido = "Martínez";
console.log("Nombre completo:", nombre + " " + apellido);

// TODO: Usa template literals (``) para mostrar: "Hola, soy [nombre] y tengo [edad] años"
// Es una forma de incluir las variables dentro de la misma oracion, sin concatenar parametros
// Requiere que la oracion se coloque dentro de (``) y las variables dentro de ${variable}
const edad = 20;
console.log(`Hola, soy ${nombre} y tengo ${edad} años`);


console.log("\n=== EJERCICIO 3: BOOLEAN ===");
// Ejemplo:
const tengoCelular = true;
console.log("¿Tengo celular?", tengoCelular);

// TODO: Crea una variable 'esFinDeSemana' con valor false
let esFinDeSemana = false;
// TODO: Muestra en consola si es fin de semana
console.log("¿Es fin de semana?", esFinDeSemana);


// TODO: Crea una variable 'tengoTarea' con valor true
let tengoTarea = true;
// TODO: Muestra en consola si tienes tarea
console.log("¿Tengo tarea?", tengoTarea);

// TODO: Crea una variable 'miEdad' con tu edad
let miEdad = 25;
// TODO: Crea una variable 'soyMayorDeEdad' que compare si miEdad >= 18
let soyMayorDeEdad = miEdad >= 18;
// TODO: Muestra el resultado en consola
console.log("¿Soy mayor de edad?", soyMayorDeEdad);


console.log("\n=== EJERCICIO 4: ARRAYS ===");
// Ejemplo:[]
const colores = ["rojo", "azul", "verde"];
console.log("Colores:", colores);
console.log("Primer color:", colores[0]);

// TODO: Crea un array llamado 'materiasEscuela' con 3 materias

const materiasEscuela = ["Matemáticas", "Historia", "Ciencias"];
// TODO: Muestra el array completo en consola
console.log("Materias de la escuela:", materiasEscuela);

// TODO: Muestra solo la primera materia del array
console.log("Primera materia:", materiasEscuela[0]);
// TODO: Muestra solo la segunda materia del array
console.log("Segunda materia:", materiasEscuela[1]);

// TODO: Muestra cuántas materias hay en el array usando .length
console.log("Cantidad de materias:", materiasEscuela.length);

// TODO: Crea un array llamado 'calificaciones' con 5 números
const calificaciones = [85, 90, 78, 92, 88, 77];
// TODO: Muestra el array y la cantidad de calificaciones
console.log("Calificaciones:", calificaciones);
console.log("Cantidad de calificaciones:", calificaciones.length);


console.log("\n=== EJERCICIO 5: COMBINADO ===");
// TODO: Crea un objeto estudiante con las siguientes propiedades:
//       - nombre (string)
//       - edad (number)
//       - materias (array con 3 materias)
//       - activo (boolean)
const estudiante = {
    edad: 22,
    materias: ["Matemáticas", "Historia", "Ciencias"],
    activo: true,
    nombre: "Carlos"
};

const estudiante2 = [ 21,"Luis", ["Física", "Química", "Biología"], false];

// TODO: Muestra el objeto completo
console.log("Estudiante:", estudiante);
console.log("Estudiante2:", estudiante2);
// TODO: Muestra solo el nombre del estudiante
console.log("Nombre del estudiante:", estudiante.nombre);
console.log("Nombre del estudiante2:", estudiante2[0]);

// TODO: Muestra la primera materia del array de materias
console.log("Primera materia del estudiante:", estudiante.materias[0]);



// ===== RETO FINAL =====
console.log("\n=== RETO FINAL ===");
// TODO: Crea un programa que calcule el promedio de 3 calificaciones
const calificacion1 = 85;
const calificacion2 = 90;
const calificacion3 = 78;
// Pista: suma las 3 calificaciones y divide entre 3
const resultado = (calificacion1 + calificacion2 + calificacion3) / 3;
// TODO: Muestra un mensaje: "Mi promedio es: [resultado]"
console.log(`Mi promedio es: ${resultado}`);