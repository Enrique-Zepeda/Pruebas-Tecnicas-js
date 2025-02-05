/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

const bisiestos = (anio) => {
  for (let i = 0; i < 30; i++) {
    if (anio % 4 === 0) {
      console.log(anio);
    }
    anio++;
  }
};

bisiestos(2023);
