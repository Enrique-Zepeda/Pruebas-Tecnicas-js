/*
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 5
*/

const eliminarDuplicados = (numeros) => {
  // Objeto para contar apariciones
  const contador = {};

  // Recorrer array y contar las apariciones de cada numero
  for (const numero of numeros) {
    if (contador[numero] === undefined) {
      contador[numero] = 1;
    } else {
      contador[numero]++;
      if (contador[numero] >= 3) {
        contador[numero] = 2;
      }
    }
  }

  const resultado = Object.values(contador).reduce(
    (acc, valor) => acc + valor,
    0
  );

  return resultado;
};

console.log(eliminarDuplicados([4, 4, 4, 2, 2, 3])); // 5
console.log(eliminarDuplicados([6, 6, 2, 2, 2, 3])); // 5
console.log(eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9])); // 6
