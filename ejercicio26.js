/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);

Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  

*/
const deboSerSocio = (veces) => {
  const usuarioCasual = 10 * veces;
  let usuarioVip = 90;
  let precioLlenado = 8.2;
  for (let i = 1; i <= veces; i++) {
    //Calcular Descuento
    let descuento = 0.78 ** i; // Elevar a x veces porque se acumula el descuento
    // Bloquear descuento a un maximo de 50%
    if (descuento <= 0.5) {
      descuento = 0.5;
    }

    //Actualizar variable llenado socio
    usuarioVip += precioLlenado * descuento;
  }

  if (usuarioCasual < usuarioVip) {
    return `Como usuario casual te sale a: ${usuarioCasual} Como socio te sale a: ${parseFloat(
      usuarioVip.toFixed(2)
    )} No te sale a cuenta ser socio ser socio  `;
  } else {
    return `Como usuario casual te sale a: ${usuarioCasual} Como socio te sale a: ${usuarioVip.toFixed(
      2
    )} sale a cuenta ser socio ser socio  `;
  }
};

console.log(deboSerSocio(15));
