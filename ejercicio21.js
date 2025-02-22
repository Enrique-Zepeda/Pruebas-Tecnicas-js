/*
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);

Devuelve: 
[
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
    ]
    
*/

const generarMatriz = (numero) => {
  // Crear un array vacio
  let matriz = [];

  //Variable acumuladora de la cifra a meter en la matrix
  let numeroActual = 1;

  //Bucle para generar fila
  for (let fila = 0; fila < numero; fila++) {
    //Crear una nueva fila con un push
    matriz.push([]);
    //generar los elementos dentro de la fila
    for (let columna = 0; columna < numero; columna++) {
      // Agregar numero a la fila actual
      matriz[fila].push(numeroActual++);
    }
  }

  // Devolver la matrix
  return matriz;
};

console.log(generarMatriz(4));
