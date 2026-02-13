/* TODO: Crea un programa que recorra un arreglo de números y determine
cuántos valores son:
- Positivos
- Negativos
- Ceros

Además, debe mostrar en consola:
1. La cantidad de positivos
2. La cantidad de negativos
3. La cantidad de ceros

Arreglos:
numerosUno = [5, -3, 0, 12, -7, 0, 9];
numerosDos = [0, 0, 0, 4, 8];
numerosTres = [-1, -5, -10, 3, 6];

TIP: Usa un bucle para recorrer el arreglo y condicionales para clasificar los números.

Ejemplo de salida esperada:
Positivos: 3
Negativos: 2
Ceros: 2
*/
let numerosUno = [5, -3, 0, 12, -7, 0, 9];
let numerosDos = [0, 0, 0, 4, 8];
let numerosTres = [-1, -5, -10, 3, 6];

contador("Uno",numerosUno);
contador("Dos",numerosDos);
contador("Tres",numerosTres);

function contador (name, numeros)
{
    let positivos=0;
    let negativos=0;
    let ceros=0;
    for(let i=0; i<numeros.length; i++)
    {
        if(numeros[i]==0)
        {
            ceros++;
        }
        else
        {
            if(numeros[i]<0)
            {
                negativos++;
            }
            else
            {
                positivos++;
            }
        }
    }

    console.log(`El arreglo ${name} contiene:`);
    console.log(`Positivos: ${positivos}`);
    console.log(`Negativos: ${negativos}`);
    console.log(`Ceros: ${ceros}`);
}