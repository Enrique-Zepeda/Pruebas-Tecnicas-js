/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8

*/

const sumarPares = (numeros) => {
  // Variable para acumular suma
  let suma = 0;

  //   recorrer array de numeros
  //   for (let i = 0; i < numeros.length; i++) {
  //     //    en cada iteracion comprobar si el numero recorrido es par
  //     if (numeros[i] % 2 === 0) {
  //       // si es par lo sumo
  //       suma += numeros[i];
  //     }
  //   }

  //   Otra manera de hacerlo con forEach
  numeros.forEach((numeroActual) => {
    if (numeroActual % 2 === 0) {
      suma += numeroActual;
    }
  });

  //   devolver resultado
  return suma;
};

console.log(sumarPares([2, 13, 6, 15])); // Resultado: 8
