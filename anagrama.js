/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(string1, string2) {
  if (string1.toLowerCase() == string2.toLowerCase()) {
    return false;
  } else if (
    string1.toLowerCase().split("").sort().join("") ===
    string2.toLowerCase().split("").sort().join("")
  ) {
    return true;
  }
}
let resultadoConfirmatorio1 = esAnagrama("Amor", "Roma");
let resultadoConfirmatorio2 = esAnagrama("lacteo", "coleta");
let resultadoNegativo1 = esAnagrama("Hola", "Chau");
let resultadoNegativo2 = esAnagrama("Que onda", "Hola");
