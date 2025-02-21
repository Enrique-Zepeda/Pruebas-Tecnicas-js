/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

const contarPalabras = (texto) => {
  const palabras = texto.map((tex) => tex.split(" "));
  const pila = [];
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      console.log(palabras[i][j]);
      pila.push(palabras[i][j]);
    }
  }

  return pila.length;
};

console.log(
  contarPalabras([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web",
  ])
);

const contarPalabrasCurso = (frases) => {
  // Definir una variable que acumule el toral de palabras de cada frase
  let totalPalabras = 0;
  //Hacer un bucle para recorrer cada frase
  frases.forEach((frase) => {
    //dividir frase actual en un array de palabras
    const palabras = frase.split(" ");
    const numeroPalabras = palabras.length;
    //sumar el total de palabras a la variable acumuladora
    totalPalabras += numeroPalabras;
  });

  //Deolver total palabras
  return totalPalabras;
};

console.log(
  contarPalabrasCurso([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web",
  ])
);
