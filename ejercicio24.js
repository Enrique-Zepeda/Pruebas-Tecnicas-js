/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);

Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]

*/

const renombrarArchivos = (ficheros) => {
  // Recorriendo cada archivo y devolviendo un array nuevo

  return ficheros.map((fichero, indice) => {
    //Crear un nuevo array filtrado que contenga todos los archivos que coinciden menos el actual
    let filtrados = ficheros
      .slice(0, indice)
      .filter((ficheroFiltro) => fichero === ficheroFiltro);

    // Si no hay repetidos devolvemos el archivo actual
    // Si si hay repetidos agregamos numeracion
    return filtrados.length === 0 ? fichero : `${fichero}(${filtrados.length})`;
  });
};

console.log(
  renombrarArchivos(["nombre", "apellido", "nombre", "apellido", "nombre"])
);
