let frase = "Soy una prueba";
console.log(frase.split(" "));

let frase2 = "I am learning Web Dev";
console.log(
  frase2
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(" ")
);
console.log(null || "string");
