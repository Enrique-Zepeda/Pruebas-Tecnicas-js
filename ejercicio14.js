/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false

*/

const esPalindromoConFunciones = (palabra) => {
  //Manera facil con funciones
  const palabraInversa = palabra.split("").reverse().join("");
  if (palabraInversa.toLowerCase() === palabra.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(esPalindromoConFunciones("otto")); // Devuelve: true
console.log(esPalindromoConFunciones("victor")); // Devuelve: false

const esPalindromoSinFunciones = (palabra) => {
  //Dividir la cadena de texto en un array de letras
  let letras = [];
  for (let i = 0; i < palabra.length; i++) {
    letras.push(palabra[i]);
  }
  //Invertir el array con un bucle
  let letraInvertidas = [];
  for (let i = palabra.length - 1; i >= 0; i--) {
    letraInvertidas.push(palabra[i]);
  }
  // Unir todas las letras del array con un bucle y guardando el resultado en una variable
  let palabraInvertida = "";
  for (let i = 0; i < palabra.length; i++) {
    palabraInvertida += letraInvertidas[i];
  }

  //Devolver el resultado
  return palabra === palabraInvertida;
};
console.log(esPalindromoSinFunciones("otto")); // Devuelve: true
console.log(esPalindromoSinFunciones("victor")); // Devuelve: false

// MiMetodo
const esPalindromo = (palabra) => {
  let palabraInvertida = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }

  return palabra === palabraInvertida;
};

console.log(esPalindromo("otto")); // Devuelve: true
console.log(esPalindromo("victor")); // Devuelve: false
