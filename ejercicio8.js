/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV

*/

const enteroARomano = (numero) => {
  // Variable para guardar string
  let resultado = "";
  // Lista numeros romanos
  const caracteresRomanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  // Equivalente en decimales
  const valoresDecimales = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];

  // Bucle para recorrer numero decimales
  for (let i = 0; i < valoresDecimales.length; i++) {
    // console.log(valoresDecimales[i], caracteresRomanos[i]);
    // Bucle para iterar mientras el numero sea mayor o igual al numero decimal que estoy recorriendo
    while (numero >= valoresDecimales[i]) {
      // anañadir el caracter romano a resultado
      resultado += caracteresRomanos[i];

      // Actualizar numero para restar el valor decimal que ya eh agregado al resultado de numeros romanos
      numero -= valoresDecimales[i];
      console.log(valoresDecimales[i], numero);
    }
  }

  // devolver resultado
  return resultado;
};
// console.log(enteroARomano(100));
console.log(enteroARomano(345));
