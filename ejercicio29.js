/*
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
  
  Ejemplos:
  filtrarPorGenero(peliculas, "accion")
  filtrarPorDecada(peliculas, "80s")
  */
const peliculas = [
  { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
  { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
  { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
  { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
  { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
  { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
  {
    titulo: "Starship Troopers",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  {
    titulo: "The Fifth Element",
    genero: "ciencia ficción",
    anioLanzamiento: 1997,
  },
  { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
  { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 },
];

const filtrarPorGenero = (peliculas, genero) => {
  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.genero === genero
  );
  return peliculasFiltradas;
};

const filtrarPorDecada = (peliculas, decada) => {
  let obtenerAnio = decada.substring(0, 2);
  obtenerAnio = Number(obtenerAnio);

  //   console.log(typeof peliculas[0].anioLanzamiento);
  const anio = obtenerAnio + 1900;
  const anioFin = anio + 9;
  console.log(anio);
  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      pelicula.anioLanzamiento >= anio && pelicula.anioLanzamiento <= anioFin
  );
  return peliculasFiltradas;
};

console.log(filtrarPorGenero(peliculas, "accion"));
console.log(filtrarPorDecada(peliculas, "80s"));
