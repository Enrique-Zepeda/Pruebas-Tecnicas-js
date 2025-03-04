/*
Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 

// Devuelve: Hola Victor Robles, hace frio
*/

const fraseFiltradaCurso = (frase) => {
  // Separar palabras del texto y guardandolas en un array
  const palabras = frase.split(" ");

  // Filtrar el array con las palabras de 4 o mas caracteres
  const filtrado = palabras.filter((palabra) => palabra.length >= 4);

  // Devolver la frase
  return filtrado.join(" ");
};

const fraseFiltrada = (frase) => {
  const palabras = frase.split(" ");

  let resultado = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length >= 4) {
      resultado += palabras[i] + " ";
    }
  }

  return resultado;
};

console.log(fraseFiltradaCurso("Hola soy Victor Robles, hoy hace frio"));
console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));
