/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

const simplificarRuta = (ruta) => {
  // Crear variable pila para almacenar las partes de la ruta
  let pila = [];

  //Dividir ruta en diferentes parte utilizando el separador /
  const partes = ruta.split("/");

  // Recorrer cada parte
  for (const parte of partes) {
    //si la parte es .. quitar ultimo elemento de la pila
    if (parte === "..") {
      pila.pop();
    }
    //Si la parte es diferrente a '.' o '..' o a una cadena vacia, guardo en la pila
    else if (parte !== "." && parte !== "") {
      pila.push(parte);
    }
  }

  return `/${pila.join("/")}`;
};
console.log(simplificarRuta("/home/")); // Salida: /home
console.log(simplificarRuta("/x/./y/../../z/")); // Salida: /z
console.log(simplificarRuta("/../")); // Salida: /
console.log(simplificarRuta("/home//pruebas/")); // Salida: /home/pruebas
