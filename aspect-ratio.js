/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const fetch = require("node-fetch");
const { createCanvas, Image } = require("canvas");

const url =
  "https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png";

// Función para obtener la información de la imagen desde la URL
async function getImageInfo(url) {
  const response = await fetch(url);
  return await response.json();
}

// Función para dibujar en el canvas y cargar la imagen
function drawImageOnCanvas(ctx, image) {
  ctx.drawImage(image, 0, 0);
}

getImageInfo(url).then((info) => {
  // Creación del canvas y carga de la imagen
  const canvas = createCanvas(info.width, info.height);
  const context = canvas.getContext("2d");
  const img = new Image();
  img.onload = () => drawImageOnCanvas(context, img);
  img.src = info.data;

  // Aspect Ratio (Ancho / Alto)
  const aspectRatio = info.width / info.height;

  console.log(`El aspect ratio de esta imagen es ${aspectRatio}`);
});
