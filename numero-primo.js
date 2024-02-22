/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.


 * Hecho esto, imprime los números primos entre 1 y 100.
 */
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  console.log(numero);
}

for (let j = 0; j <= 100; j++) {
  esPrimo(j);
}
