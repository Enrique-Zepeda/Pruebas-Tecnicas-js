/*
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false

*/

const sonCompatibles = (arr) => {
  // Definir dos arrays con lenguajes backEnd y FrontEnd
  const frontEnd = ["HTML", "HTML5", "CSS", "CSS3", "XHTML", "JAVASCRIPT"];
  const backEnd = ["PHP", "PYTHON", "RUBY", "NODE", "C#", "JAVA", "RUST", "GO"];

  const lenguaje1 = arr[0];
  const lenguaje2 = arr[1];

  // Comprobar si un lenguaje es front o back
  if (
    (frontEnd.includes(lenguaje1.toUpperCase()) &&
      backEnd.includes(lenguaje2.toUpperCase())) ||
    (backEnd.includes(lenguaje1.toUpperCase()) &&
      frontEnd.includes(lenguaje2.toUpperCase()))
  ) {
    return true;
  } else {
    return false;
  }
  // Si no s cumple true o false
};

console.log(sonCompatibles(["HTML", "PHP"])); // true
console.log(sonCompatibles(["PHP", "PYTHON"])); // false
