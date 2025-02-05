/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

const permutacion = (numeros) => {
  //Ordenar
  numeros.sort();
  let bandera = true;

  for (let i = 0; i < numeros.length; i++) {
    if (i + 1 !== numeros[i]) {
      console.log(`El numero faltante para una permutacion es ${i + 1}`);
      bandera = false;
    }
  }

  if (bandera === true) {
    console.log(
      `Es una permutacion es perfecta y el numero mas grande es ${Math.max(
        ...numeros
      )}`
    );
  }

  //   return numeros;
};

console.log(permutacion([1, 2, 3, 4, 5]));
