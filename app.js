function enCRIptar () {
    /* Recibe y guarda la informacion del id texttarea del contenedor principal*/
    let texto = document.getElementById("texto").value;
    /* la informacion remplaza se crea una nueva variable, se agrega el texto del let,replace se encarga de remplazar por lo que estan en comillas */
    var textocifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    /* Este devuelve la informacion en el otro contenedor*/
    
    if(texto.length != 0){
        document.querySelector(".receptor").value = textocifrado;
    }else{
        window.alert ("NO A INGRESADO NADA")
    }

}
function deSENcriptar(){
    /* Recibe la informacion*/
    let texto = document.getElementById("texto").value;
    /*El mismo metodo pero esta ves se cambia la palabra por la letra ej si es ember la va remplazar por la e*/
    var textocifrado =  texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    

    if(texto.length != 0){
        /*Este devuleve la informacion en el otro contenerdor*/
    document.querySelector(".receptor").value = textocifrado;

    }else{
        window.alert("NO SE A INGRESADO NADA")
    }
}
function portapapeles() {
    window.alert("A sido Copiado con exito");
    /* Donde se va traer las palabras o texto*/
    var origen = document.getElementById('texttarea');
    /* Donde lo mas probable lo vaya a colocar*/
    var destino = document.getElementById('texto');
    /* Se crea elemento para que se guarde la informacion */
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    /*la verdad no se como funciona lo saque de google, pero funciona*/
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');

}