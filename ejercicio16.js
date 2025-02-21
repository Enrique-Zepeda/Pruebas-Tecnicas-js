/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');

**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********

*/

const mostrarTextoCaja = (texto) => {
  const palabras = texto.split(" ");

  let longitudMasgrande = 0;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > longitudMasgrande) {
      longitudMasgrande = palabras[i].length;
    }
  }

  const asteriscos = "*".repeat(longitudMasgrande + 4);

  console.log(asteriscos);

  for (let i = 0; i < palabras.length; i++) {
    console.log(
      `* ${palabras[i]}${" ".repeat(
        Math.abs(longitudMasgrande - palabras[i].length)
      )} *`
    );
  }
  console.log(asteriscos);
};

mostrarTextoCaja("Hola soy Víctor Robles WEB");
