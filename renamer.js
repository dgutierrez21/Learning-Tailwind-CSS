function renombrar(texto) {
  const aEspacio = texto.replaceAll("-", " ");
  const aGuion = texto.replaceAll(" ", "-");

  return texto.includes("-") ? aEspacio : aGuion;
}

function camelizar(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (palabra) {
      return palabra.toUpperCase();
    })
    .replace(/\s+/g, "");
}

const nombre = "folder and file template";

console.log(renombrar(nombre));
console.log(camelizar(nombre));
