/*
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

const buscarPalabra = (texto, palabraBuscar) => {
  const palabraEncontrada = texto
    .toLowerCase()
    .indexOf(palabraBuscar.toLowerCase());
  return palabraEncontrada >= 0 ? true : false;
};

console.log(buscarPalabra("Hola como estas", "Hola")); // Devuelve: true
