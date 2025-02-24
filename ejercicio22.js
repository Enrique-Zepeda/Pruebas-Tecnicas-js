/*
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");

Devuelve: 
aloH

*/

const invertirTexto = (texto) => {
  //   const textoArray = texto.split("");
  //   const textoInvertido = textoArray.reverse().join("");

  // Crear una variable para guardar la cadena invertida
  let textoInvertido = "";

  // Bucle para generar la cadena invertida;
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  return textoInvertido;
};

console.log(invertirTexto("Hola"));
