/*
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 

Devuelve: 27

*/

const calcularAreaPoligono = (poligono) => {
  const { altura, base, tipo } = poligono;

  switch (tipo) {
    case "triangulo":
      return (altura * base) / 2;
    case "rectangulo":
      return altura * base;

    case "cuadrado":
      return altura * base;

    default:
      return `Ingresa datos validos`;
  }
};
console.log(calcularAreaPoligono({ tipo: "triangulo", base: 6, altura: 9 }));
