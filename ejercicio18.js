/*
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
 
*/

const usuarios = [
  { nombre: "Antonio", edad: 20 },
  { nombre: "Juan", edad: 23 },
  { nombre: "Pepe", edad: 12 },
  { nombre: "Raul", edad: 28 },
  { nombre: "Paco", edad: 38 },
  { nombre: "Jason", edad: 56 },
];

const filtrarUsuarios = (usuarios) => {
  const pila = [];
  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].nombre.includes("o") &&
      usuarios[i].nombre.includes("n") &&
      usuarios[i].edad >= 20
    ) {
      pila.push(usuarios[i]);
    }
  }
  return pila;
};
console.log(filtrarUsuarios(usuarios));

const filtrarUsuariosCurso = (usuarios) => {
  //usar la funcion Filter
  const usuariosFiltrados = usuarios.filter(
    (user) =>
      user.edad >= 20 &&
      user.nombre.toLowerCase().includes("o") &&
      user.nombre.toLowerCase().includes("n")
  );
  return usuariosFiltrados;
};

console.log(filtrarUsuariosCurso(usuarios));
