// let mensaje = document.getElementById('encriptarTexto').value;
// let mensajeEncriptado = "";

function encriptarBoton() {

    encriptado();

    // deshabilitarImagen();

    // botonCopiar();

}

function desencriptarBoton() {

    desencriptar()

    // deshabilitarImagen();

    // botonCopiar();

}

function copiarPortapapeles(){
    
    var range = document.createRange();
    range.selectNode(document.getElementById("textoMostrado"));
    navigator.clipboard.writeText(range)
    .then(() => {
        alert(`Se ha copiado el mensaje: ${range}`);
        console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })
}


function encriptado() {

    let mensaje = document.getElementById('encriptarTexto').value;
    let mensajeEncriptado = "";
    let contadorVocales = 0;
    console.log(`mensaje original = ${mensaje}`);

    if (contieneMayuscula(mensaje) === true) {
        alert('Mensaje NO debe contener mayúsculas');
    } else if (contieneTildes(mensaje) === true) {
        alert('Mensaje NO debe contener tildes');
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

        if (contadorVocales < 1 || mensaje.length < 1) {
            mostrarTextoFinal('#textoMostrado', 'Ningún mensaje fue encontrado para encriptar');
        } else {
            console.log(`mensaje en = ${mensajeEncriptado}`);
            mostrarTextoFinal('#textoMostrado', mensajeEncriptado);
            limpiarTextoIngresado();
            deshabilitarImagen();
            botonCopiar();
        }

        return;
    }

}

function desencriptar() {

    let mensaje = document.getElementById('encriptarTexto').value;
    let mensajeDesencriptado = "";

    console.log(`mensaje original = ${mensaje}`);

    if (contieneMayuscula(mensaje) === true) {
        alert('Mensaje NO debe contener mayúsculas');
    } else if (contieneTildes(mensaje) === true) {
        alert('Mensaje NO debe contener tildes');
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

        if (mensaje.length < 1  || mensaje == mensajeDesencriptado ) {
            mostrarTextoFinal('#textoMostrado', 'Ningún mensaje fue encontrado para desencriptar');
        } else {
            mostrarTextoFinal('#textoMostrado', mensajeDesencriptado);
            deshabilitarImagen();
            botonCopiar();
            limpiarTextoIngresado();
        }

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

function contieneTildes(mensaje) {
    let validacionVerdadera = false;
    for (let i = 0; i < mensaje.length; i++) {
        let cuentaTildes = 0;

        if (mensaje[i] == "á") {
            cuentaTildes += 1;
        } else if ((mensaje[i] == "é")) {
            cuentaTildes += 1;
        } else if ((mensaje[i] == "í")) {
            cuentaTildes += 1;
        } else if ((mensaje[i] == "ó")) {
            cuentaTildes += 1;
        } else if ((mensaje[i] == "ú")) {
            cuentaTildes += 1;
        }

        if (cuentaTildes > 0) {
            validacionVerdadera = true;
            break;
        }
    };

    return validacionVerdadera;
}

function deshabilitarImagen() {
    document.getElementById('muneco').style.display = 'none';
    return;
}

function botonCopiar() {
    document.getElementById('copiarBoton').style.visibility = 'visible';
    return;
}

