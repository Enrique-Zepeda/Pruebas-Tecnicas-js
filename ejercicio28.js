/*
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/

const esArmstrong = (numero) => {
  //convertir numero a un arreglo con cada digito separado y convertirlo despues a Number
  const numeroArreglo = String(numero).split("").map(Number);
  //   const arr = [...`${num}`].map(Number);
  // Elevar los numeros al cubo ** sirve para elevar
  const numerosElevados = numeroArreglo.map(
    (num) => num ** numeroArreglo.length
  );
  // Sumar los numeros elevados
  const sumaNumerosElevados = numerosElevados.reduce((acc, num) => acc + num);

  return sumaNumerosElevados === numero ? true : false;
};

console.log(esArmstrong(371)); // Devuelve: true
