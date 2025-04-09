/*
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

const aBinario = (numero) => {
  // Crear variable con el resultado
  let resultado = "";

  //Bucle mientras el numero sea mayor a cero seguir dividiendo el numero entre dos y el resto agregarlo al resultado

  while (numero > 0) {
    resultado = (numero % 2) + resultado;
    numero = Math.floor(numero / 2);
  }
  return parseInt(resultado);
};

console.log(aBinario(10)); // 1010
console.log(aBinario(76)); // 1001100
