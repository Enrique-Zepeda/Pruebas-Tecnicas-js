/*
Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }

*/

const agrupar = (datos, claveDeAgrupacion) => {
  // Objeto vacio para llenarlo con los resultados

  const resultado = {};

  // Recorrer todos los elementos del array de datos
  datos.forEach((elemento) => {
    //Evaluar si la claveDeAgrupacion es una funcion o una propiedad
    let propiedad =
      typeof claveDeAgrupacion === "function"
        ? claveDeAgrupacion(elemento)
        : elemento[claveDeAgrupacion];

    // Comprobar si el valor no existe y crear un elemento dentrop del objeto
    if (!resultado[propiedad]) {
      resultado[propiedad] = [];
    }
    // Agregar elemnto al array corresponiente
    resultado[propiedad].push(elemento);
  });

  // Devolver resultado
  return resultado;
};

console.log(agrupar([7.2, 5.3, 7.4], Math.floor));
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
console.log(agrupar(["uno", "dos", "tres", "cuatro"], "length"));
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
console.log(
  agrupar(
    [
      { nombre: "victor", edad: 33 },
      { nombre: "paco", edad: 44 },
    ],
    "edad"
  )
);
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
