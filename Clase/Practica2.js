console.log("\n=== RETO FINAL ===");
/* TODO: Crea un programa que calcule el promedio de las calicaciones dada un arreglo de
calificaciones y muestre el resultado en consola donde
A = 90 - 100
B = 80 - 89
C = 70 - 79
D = 60 - 69
F = 0 - 59

Arreglos:
calificacionesUno = [85, 90, 78, 92, 88];
calificacionesDos = [85, 90, 78];
calificacionesTres = [65, 70, 72, 68, 60];

*/

let calificacionesMichel = [85, 90, 78, 92, 88];
let calificacionesLuis = [65, 70, 72, 68, 60];
let calificacionesAna = [85, 90, 78];

rango("Michel", calificacionesMichel);
rango("Luis", calificacionesLuis);
rango("Ana", calificacionesAna);

function rango (name, calificaciones)
{
    let promedio = 0;
    console.log(`Alumn@: ${name}`);
    for (i=0;i<calificaciones.length;i++)
    {
        promedio = promedio + calificaciones[i];
        console.log(`Calificacion ${i+1}: ${calificaciones[i]}`);
    }
    promedio = promedio / calificaciones.length;

    if (promedio<100 && promedio>=90)
    {
        calificacion = "A";
    }
    else 
    {
        if (promedio<90 && promedio>=80)
        {
                calificacion = "B";
        }
        else 
        {
            if (promedio<80 && promedio>=70) 
            {
                calificacion = "C";
            }
            else 
            {
                if (promedio<70 && promedio>=60) 
                {
                    calificacion = "D";
                } 
                else 
                {
                    if (promedio<60 && promedio>=0)
                    {
                        calificacion = "F";
                    }
                    else
                    {
                        calificacion = "Inválido";
                    }
                }                          
            }    
        }
    }
    
    console.log(`Promedio: ${promedio}`);
    console.log(`Calificación: ${calificacion}`);
    console.log("=========================================");
}
