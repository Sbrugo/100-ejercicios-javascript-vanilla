/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function area_de_poligono(cantLados, base, altura, largo, apotema) {
  switch (cantLados) {
    case 3:
      return area_triangulo(base, altura);
    case 4:
      return area_rectangulo(base, altura);
    case 5:
      return area_pentagono(largo, apotema);
    default:
      console.log("El polígono no está soportado o no existe");
      return null;
  }
}

function area_triangulo(base, altura) {
  return (base * altura) / 2;
}

function area_rectangulo(base, altura) {
  return base * altura;
}

function area_pentagono(largo, apotema) {
  return (largo * 5 * apotema) / 2;
}

// Ejemplo de uso:
console.log(area_de_poligono(4, 5, 7)); // Salida: 35
