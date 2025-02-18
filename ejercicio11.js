/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]

*/

const sumarDos = (numeros, resultado) => {
  // Recorrer el array de numeros
  for (let i = 0; i < numeros.length; i++) {
    // Calculo, para sacar el segundo numero para devolver
    let primerNumero = numeros[i];
    let segundoNumero = resultado - primerNumero;
    // console.log(segundoNumero, numeros[i]);
    // Comprobar si existe un segundo numero en el array que sumado al actual sea igual al resultado esperado y comprobar tambien que la variable segundoNumero el valor es distinto al numero actual que estoy recorriendo

    // Si se cumple devolver un array con el numero actual que estoy recorriendo y el segundoNumero que he calculado
    if (numeros.includes(segundoNumero) && segundoNumero !== primerNumero) {
      return [primerNumero, segundoNumero];
    }
  }
};
console.log(sumarDos([3, 2, 8, 7], 10)); // [3, 7] (ambos suman 10)
console.log(sumarDos([4, 5, 9, 1], 10)); // [9, 1]
console.log(sumarDos([1, 2, 3, 4], 5)); // [2, 3]
