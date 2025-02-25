/*
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);

Devuelve: 
HOLA

*/
const decodificarMensajeCurso = (codigo) => {
  // Crear variable [ara ir almacenando la cadena de texto descifrada
  let mensajeDesifrado = "";
  // Recorrer el array
  for (let i = 0; i < codigo.length; i++) {
    // Actualizar variable principal con la letra que corresponda al numero
    mensajeDesifrado += String.fromCharCode(parseInt(codigo[i]) + 64);
  }

  // Convertir numero a letra
  // let letra = String.fromCharCode(parseInt(1) + 64);

  // Devolver resultado
  return mensajeDesifrado;
};
console.log(decodificarMensajeCurso([8, 15, 12, 1]));

const decodificarMensaje = (mensajeOculto) => {
  const letras = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };

  let mensaje = "";

  for (let i = 0; i < mensajeOculto.length; i++) {
    // console.log(letras[mensajeOculto[i]]);s
    mensaje += letras[mensajeOculto[i]];
  }

  return mensaje;
};
console.log(decodificarMensaje([8, 15, 12, 1]));
