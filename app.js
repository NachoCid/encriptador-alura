// let mensaje = document.getElementById('encriptarTexto').value;
// let mensajeEncriptado = "";

function encriptarBoton() {

    encriptado();

    limpiarTextoIngresado();

}

function desencriptarBoton() {

    desencriptar()

    limpiarTextoIngresado();

}

function encriptado() {

    let mensaje = document.getElementById('encriptarTexto').value;
    let mensajeEncriptado = "";
    let contadorVocales = 0;
    console.log(`mensaje original = ${mensaje}`);

    if (contieneMayuscula(mensaje) === true) {
        alert('Mensaje NO debe contener mayúsculas');
    } else {

        for (let i = 0; i < mensaje.length; i++) {
            let variante = "";

            if (mensaje[i] == "a") {
                variante = "ai";
                contadorVocales += 1;
            } else if ((mensaje[i] == "e")) {
                variante = "enter";
                contadorVocales += 1;
            } else if ((mensaje[i] == "i")) {
                variante = "imes";
                contadorVocales += 1;
            } else if ((mensaje[i] == "o")) {
                variante = "ober";
                contadorVocales += 1;
            } else if ((mensaje[i] == "u")) {
                variante = "ufat";
                contadorVocales += 1;
            } else {
                variante = mensaje[i];
            }

            mensajeEncriptado = mensajeEncriptado + variante;
        };

        console.log(`cantidad vocales = ${contadorVocales}`);

        if (contadorVocales > 0) {
            console.log(`mensaje en = ${mensajeEncriptado}`);
            mostrarTextoFinal('#textoMostrado', mensajeEncriptado);
        } else {
            mostrarTextoFinal('#textoSinEncriptar', 'Ningún mensaje fue encontrado');
            mostrarTextoFinal('#textoMostrado', '');
        }

        return;
    }

}

function desencriptar() {

    let mensaje = document.getElementById('encriptarTexto').value;
    let mensajeDesencriptado = "";
    let contadorVocales = 0;

    console.log(`mensaje original = ${mensaje}`);

    if (contieneMayuscula(mensaje) === true) {
        alert('Mensaje NO debe contener mayúsculas');
    } else {

        let buscarMatch = '';
        let cambiarPorVocal = '';
        let resultado = mensaje;

        cambiarPorVocal = 'a';
        buscarMatch = 'ai';
        resultado = resultado.split(buscarMatch).join(cambiarPorVocal);

        cambiarPorVocal = 'e';
        buscarMatch = 'enter';
        resultado = resultado.split(buscarMatch).join(cambiarPorVocal);
        
        cambiarPorVocal = 'i';
        buscarMatch = 'imes';
        resultado = resultado.split(buscarMatch).join(cambiarPorVocal);
        
        cambiarPorVocal = 'o';
        buscarMatch = 'ober';
        resultado = resultado.split(buscarMatch).join(cambiarPorVocal);   
        
        cambiarPorVocal = 'u';
        buscarMatch = 'ufat';
        resultado = resultado.split(buscarMatch).join(cambiarPorVocal);   
        
        mensajeDesencriptado = resultado;
        console.log(`Texto Final: ${mensajeDesencriptado}`);

        mostrarTextoFinal('#textoMostrado', mensajeDesencriptado);

    }
}

function mostrarTextoFinal(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarTextoIngresado() {
    document.getElementById('encriptarTexto').value = '';
    return;
}

function contieneMayuscula(str) {
    return str !== str.toLowerCase();
}