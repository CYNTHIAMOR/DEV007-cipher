import cipher from "./cipher.js";
window.addEventListener("load", inicio, true);
function inicio() {
  document.getElementById("mensaje").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  }, true);
  document.getElementById("cifrar").addEventListener("click", function () {
    const texto = document.getElementById("mensaje").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
    // eslint-disable-next-line no-console
    console.log(cipher.encode(desplazamiento, texto));
  }, true);
  document.getElementById("descifrar").addEventListener("click", function () {
    const texto = document.getElementById("mensaje").value.toUpperCase();
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);
    // eslint-disable-next-line no-console
    console.log(cipher.decode(desplazamiento, texto));
  }, true);
}
