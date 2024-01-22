let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);

    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos ==1? "vez" : "veces")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número es menor");
        }else{
            asignarTextoElemento("p","El número es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
 document.querySelector("#numeroUsuario").value="";
   
}

function condicionesIniciales(){
asignarTextoElemento(("h1"), "Juego del número secreto");
asignarTextoElemento(("p"), `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto=numAleatorio();
intentos=1;
console.log(numeroSecreto);
}
function reiniciarJuego(){
   limpiarCaja();
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute("disabled","true");
   
}

condicionesIniciales();

asignarTextoElemento(("h1"), "Juego del número secreto");
asignarTextoElemento(("p"), `Indica un número del 1 al ${numeroMaximo}`);


function numAleatorio() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(("p"), `Ya se sortearon todos los numeros posibles`);
    }else{
         if(listaNumerosSorteados.includes(numeroSecreto)){
   
return numAleatorio();
 } else{
    listaNumerosSorteados.push(numeroSecreto);
    return numeroSecreto;
 }
    }



 }
