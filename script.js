function encriptar() {
    var frase = document.getElementById("textoIngresado").value.toString();
    var textoIngresado = frase.replace(/e/igm,"enter");
    var textoIngresado = textoIngresado.replace(/o/igm,"ober");
    var textoIngresado = textoIngresado.replace(/i/igm,"imes");
    var textoIngresado = textoIngresado.replace(/a/igm,"ai");
    var textoIngresado = textoIngresado.replace(/u/igm,"ufat");

    if (/[A-Záéíóú]/.test(frase)) {
        alert('No debe contener mayúsculas ni acentos');
        return '';
    }


    document.getElementById("texto_2").innerHTML = textoIngresado;
    document.getElementById("texto").style.display = "none";
    document.getElementById("imagenPersona").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var frase = document.getElementById("textoIngresado").value.toString();
    var textoIngresado = frase.replace(/enter/igm,"e");
    var textoIngresado = textoIngresado.replace(/ober/igm,"o");
    var textoIngresado = textoIngresado.replace(/imes/igm,"i");
    var textoIngresado = textoIngresado.replace(/ai/igm,"a");
    var textoIngresado = textoIngresado.replace(/ufat/igm,"u");

    document.getElementById("texto_2").innerHTML = textoIngresado;
    document.getElementById("texto").style.display = "none";
    document.getElementById("imagenPersona").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiarTexto() {
    navigator.clipboard.writeText(texto_2.textContent);
}