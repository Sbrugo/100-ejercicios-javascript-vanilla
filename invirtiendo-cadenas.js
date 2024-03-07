function invertirCadena(cadena) {
  var cadenaInvertida = "";
  for (var i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
}

var cadena = "Hola mundo";
var cadenaInvertida = invertirCadena(cadena);

console.log("Cadena original: " + cadena);
console.log("Cadena invertida: " + cadenaInvertida);
