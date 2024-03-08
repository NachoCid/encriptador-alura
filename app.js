// let mensaje = document.getElementById('encriptarTexto').value;
// let mensajeEncriptado = "";

function encriptarBoton() {

    encriptado();

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
            } else if ((mensaje[i] =="u")) {
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

// function desencriptar() {

//     let mensaje = document.getElementById('encriptarTexto').value;
//     let mensajeDesencriptado = "";
//     let contadorVocales = 0;    

//     console.log(`mensaje original = ${mensaje}`);

//     if (contieneMayuscula(mensaje) === true) {
//         alert('Mensaje NO debe contener mayúsculas');
//     } else {
//         for (let i = 0; i < 5; i++) {
            
//         switch (i) {
//             case 0:
//                 const search = ' ';
//                 const replaceWith = '-';

//                 const result = 'duck duck go'.split(search).join(replaceWith);

//                 console.log(result); // => 'duck-duck-go'
//                 break;
        
//             default:
//                 break;
//         }

//     }
// }    

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