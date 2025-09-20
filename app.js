let numeroSecreto = 0;
let intentos = 0;
let listaNumerossorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`ACERTASTE EL NUMERO SECRETO EN ${intentos} ${intentos === 1 ? 'INTENTO' : 'INTENTOS'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        limpiarCaja();
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
    }
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function generadorNumeroSecreto() {

    //Se genera el numero aleatorio
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerossorteados);

    if (listaNumerossorteados.length == numeroMaximo){
        asignarTextoElemento('p','Todos los numeros han sido sorteados')
        
    } else {

        if (listaNumerossorteados.includes(numeroGenerado)){
            return generadorNumeroSecreto();
        } else {
            listaNumerossorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    //Se verfica si el numero ya esta incluido en la lista de numeros aleatorios
    
} 

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del numero secreto')
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generadorNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');


}


condicionesIniciales();
