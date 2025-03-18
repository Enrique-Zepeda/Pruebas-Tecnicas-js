/*
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);

Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]

*/

const encontrarParejasConSuma = (numeros, objetivo) => {
  // Array de numeros valido y que tenga una longitud de 2 numero
  if (!Array.isArray(numeros) || numeros.length < 2) {
    return false;
  }
  // Crear array de parejas de numeros para guardar las parejas encontradas
  let parejas = [];
  // Recorrer el array de numero
  for (const numeroActual of numeros) {
    //   Recorrer de nuevo apartir del elemento que recorra ahora
    for (const otroNumero of numeros.slice(numeros.indexOf(numeroActual) + 1)) {
      // Comprabar si la suma me da el resultado de suma esperado
      if (numeroActual + otroNumero === objetivo) {
        parejas.push([numeroActual, otroNumero]);
      }
    }
  }

  // Devuelvo las parejas
  return parejas;
};

const encontrarParejasConSumaMiSolucion = (numeros, objetivo) => {
  const parejas = [];
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 1; j <= numeros.length; j++) {
      if (numeros[i] + numeros[j] === objetivo) {
        parejas.push([numeros[i], numeros[j]]);
      }
    }
  }
  parejas.pop();
  return parejas;
};

const encontrarParejasConSumaOptimizado = (numeros, objetivo) => {
  let parejas = [];
  let vistos = new Set(); // Para almacenar los números ya visitados

  for (let numero of numeros) {
    let complemento = objetivo - numero;

    // Si el complemento ya fue visto, tenemos una pareja
    if (vistos.has(complemento)) {
      parejas.push([complemento, numero]); // Ordenamos como (complemento, número)
    }

    // Agregamos el número actual al set
    vistos.add(numero);
  }

  return parejas;
};

// console.log(encontrarParejasConSuma([1, 2, 3, 4], 5));
// console.log(encontrarParejasConSumaMiSolucion([1, 2, 3, 4], 5));

console.log(encontrarParejasConSumaOptimizado([1, 2, 3, 4], 5)); // [[1, 4], [2, 3]]
console.log(encontrarParejasConSumaOptimizado([1, 2, 3, 4, 5, 6], 7)); // [[1, 6], [2, 5], [3, 4]]
console.log(encontrarParejasConSumaOptimizado([1, -1, 2, -2, 3], 1)); // [[-1, 2], [-2, 3]]
