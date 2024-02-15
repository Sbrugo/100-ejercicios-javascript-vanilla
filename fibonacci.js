/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
// // 3 Imprimir la sucesión fibonacci hasta 50

function fibonacci() {
  let a = 0,
    b = 1,
    c,
    s = 1;
  console.log(a);
  console.log(b);
  for (i = 3; i <= 50; i++) {
    c = a + b;
    console.log(c);
    s = s + c;
    a = b;
    b = c;
  }
}

console.log(fibonacci());
