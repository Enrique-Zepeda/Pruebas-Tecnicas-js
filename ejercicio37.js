/*
 Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

const todosPares = (numeros) => {
  return numeros.every((num) => num % 2 === 0);

  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador++;
    } else {
      return false;
    }
  }
  if (contador === numeros.length) {
    return true;
  }
};

console.log(todosPares([1, 2, 3, 4])); // false
console.log(todosPares([2, 6, 8, 12])); // true
