
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarBoton() {

    let mensaje = document.getElementById('encriptarTexto').value;
    let mensajeEncriptado = "";
    console.log(mensaje);

    for (let i = 0; i < mensaje.length; i++) {
        let variante = "";

        if (mensaje[i] === "a") {
            variante = "ai";
        } else if ((mensaje[i] === "e")) {
            variante = "enter";
        } else if ((mensaje[i] === "i")) {
            variante = "imes";
        } else if ((mensaje[i] === "o")) {
            variante = "ober";
        } else if ((mensaje[i] === "u")) {
            variante = "ufat";
        } else {
            variante = mensaje[i];
        }

        mensajeEncriptado = mensajeEncriptado + variante;
    };

    console.log(mensajeEncriptado);

    return;

}