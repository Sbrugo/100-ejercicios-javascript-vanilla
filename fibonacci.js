/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function sucesión_de_fibonacci() {
  for (let i = 0; i <= 50; i++) {
    console.log([i - 1] + [i - 2]);
  }

  // let n = 0;
  // do {
  //   n++;
  //   console.log(n + (n - 1));
  // } while (n < 50);
}
console.log(sucesión_de_fibonacci());
