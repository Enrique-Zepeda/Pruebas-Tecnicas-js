/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function diferenciaDeDias(fecha1, fecha2) {
  // Dar el formato correcto a las fechas
  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

  // Obtener la diferencia en milisegundos entre las dos fechas
  const diferenciaMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());

  // Dividir la diferencia en milisegundos entre el número de milisegundos
  // que tiene un día y redondearla para sacar los días
  const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

  if (isNaN(dias)) {
    return "Formato de fecha incorrecto, usa el formato americano";
  }

  return "La diferencia son " + dias + " días";
}

console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"));
console.log(diferenciaDeDias("3/3/2023", "20/3/2023"));
