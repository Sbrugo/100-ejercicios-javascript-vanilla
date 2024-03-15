function contarPalabras(text) {
  let caracteres = '/[.,/#!$%^&*;:{}=-_`~()]/g, ""';
  let splitCaracteres = caracteres.split(" ");

  splitText = text.split(" ");

  let palabraUnica = {};
  var conteo = 0;

  // Iterar sobre cada palabra y contar su ocurrencia
  for (let i = 0; i < splitText.length; i++) {
    // palabraUnica.push(splitText[i]);
    // if (!splitCaracteres.includes(splitText[i])) {
    //   if (!palabraUnica.includes(splitText[i])) {
    //     conteo++;
    //   }
    // }
    palabraUnica[splitText[i]];
    console.log(palabraUnica);
  }
  console.log(conteo);
  return conteo;
}

var texto =
  "Este es un texto de ejemplo. En este texto se repiten algunas palabras, como ejemplo, este, texto, y otras palabras.";

var recuento = contarPalabras(texto);
