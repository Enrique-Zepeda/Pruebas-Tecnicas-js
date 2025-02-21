/*
Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();

*/

const dados = () => {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  return `Dado1: ${dado1}, Dado2: ${dado2}`;
};
console.log(dados());
