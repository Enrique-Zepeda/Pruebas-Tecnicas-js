/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

const juegoDelAhorcado = (palabraSecreta) => {
  // Crear variable palabra oculta con guiones bajos _
  let palabraOculta = "_".repeat(palabraSecreta.length);

  // Variable con intentos
  let intentos = 5;

  // Convierto la palabra en minusculas
  palabraSecreta = palabraSecreta.toLowerCase();

  console.log(palabraSecreta);
  //Bucle para pedir las letras
  // El blucle se ejecuta mientras la palabraSecreta no sea descubierta y mientras aun tengas intentos
  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    //Pedido la letra y la trasformo a minuscula
    let letra = prompt("Ingresa una letra").toLowerCase();

    //Verificar si la letra esta en la palabra
    if (palabraSecreta.includes(letra)) {
      // Creo un arreglo para poder comprobar en que indice esta la letra
      for (let i = 0; i < palabraSecreta.length; i++) {
        // Compruebo en que indice es ta la palbra
        if (palabraSecreta[i] === letra) {
          // Creo el arreglo
          let palabraOcultaArray = Array.from(palabraOculta);
          // Le agregamos la letra encontrada al indice
          palabraOcultaArray[i] = letra;

          // Hacemos que la palabra oculta tenga el valor del arreglo pero el arreglo lo trasnformamos a un string
          palabraOculta = palabraOcultaArray.join("");
        }
      }
    } else {
      //Si la letra no esta se restan intentos
      intentos--;
    }
    console.log(
      `La palabra oculta es ${palabraOculta} y te quedan ${intentos} intentos`
    );
  }

  // Cuando salgamos del ciclo while comprobamos si gano o perdio
  if (palabraOculta === palabraSecreta) {
    console.log("Ganaste");
  } else {
    console.log("Perdiste");
  }
};

const lanzarJuego = document.querySelector("#lanzarJuego");

lanzarJuego.addEventListener("click", () => juegoDelAhorcado("Kike"));
