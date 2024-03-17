
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

const textoOrigen = document.querySelector(".texto-origen");
const mensaje = document.querySelector(".texto-final");


function btnEncriptar(){
    const textoEncriptado = encriptar(textoOrigen.value)
        mensaje.value = textoEncriptado
        textoOrigen.value = ""
        mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [['e', 'enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
        }
    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoOrigen.value)
        mensaje.value = textoEncriptado
        textoOrigen.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e', 'enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); 
        }
    }
    return stringDesencriptada
}
    

function btnCopiar(){
    navigator.clipboard.writeText(  mensaje.value);
    alert("Se ha copiado el mensaje")
}