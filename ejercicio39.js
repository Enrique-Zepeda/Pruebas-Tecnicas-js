/*
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);

Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
    ]
*/

function combinacionesParentesisCurso(numero) {
  // Definir variable de resultados
  let resultados = [];

  // Comprobar si el numero es valido
  if (numero < 1) return resultados;

  // Ejecutar funcion recursiva para generar los parentesis
  generarParentesis("", numero, numero, resultados);

  // Devolver resultado
  return resultados;
}
//Contador ejecuciones
let contadorEjecucionesRecursiva = 0;

// Funcion recursiva
function generarParentesis(combinacion, abiertos, cerrados, resultados) {
  // Si no quedan parentesis abierto ni cerrados, añadir combinacion a resultados
  if (abiertos === 0 && cerrados === 0) {
    resultados.push(combinacion);
    return;
  }

  // Si todavia quedan parentesis abiertos dispinibles añadimos uno a la combinacion y seguimos con la recursion
  if (abiertos > 0) {
    generarParentesis(combinacion + "(", abiertos - 1, cerrados, resultados);
  }

  // Si todavia quedan parentesis cerrados disponibles y hay almenos un parentesis abierto disponible para cerrar, lo añadimos a la combinacion
  if (cerrados > 0 && abiertos < cerrados) {
    generarParentesis(combinacion + ")", abiertos, cerrados - 1, resultados);
  }

  // Actualizar contador recursion
  contadorEjecucionesRecursiva++;
}

console.log(combinacionesParentesisCurso(3));

function combinacionesParentesisMejor(n) {
  const result = [];

  function backtrack(current, open, close) {
    // Si la combinación es válida (se usan todos los paréntesis)
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    // Si aún puedo agregar un paréntesis abierto
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Si puedo cerrar un paréntesis (solo si hay más abiertos)
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

console.log(combinacionesParentesisMejor(3));
