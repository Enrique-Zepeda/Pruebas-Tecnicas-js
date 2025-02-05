/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

const ordenarPorApellidos = (personas) => {
  const apellidos = personas.map((apellido) => apellido.split(" ")[1]);
  apellidos.sort();

  const nombresOrdenados = apellidos.map((apellido) => {
    const fullName = personas.find((name) => name.split(" ")[1] === apellido);
    return fullName;
  });

  return nombresOrdenados;
};

console.log(
  ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
  ])
);
