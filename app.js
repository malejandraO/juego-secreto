let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSoteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
/*se utilizo document.getElementById('reiniciar') con el fin de habilitar el boton 
nuevo juego. reiniciar es el id, y el atributo que se esta removiendo es disable,
que en el archivo index es el que lo mantiene desativado*/

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
        } else {
                asignarTextoElemento('p','El número secreto es mayor');
        } 
        intentos++;
        limpiarCaja()
        }
    return;
}
/*vamos a limpiar la caja donde el usuario ingresa el numero automaticamente.
se utiliza document. para llamar al elemento en este caso el input nombrado en el index.

ademas utilizamos query se coloca # para que sepa que es un ID, cumple la misma
funcion que getElementById */

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    /*si el numero generado esta en la lista, se hace una operacion, sino se hace otra*/ 
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSoteados);

    // si ya sorteamos todos los numeros
    if (listaNumerosSoteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else {
    /* includes, revisa el arreglo, y verifica si  el numero generado 
    ya existe en la lista.*/
        if(listaNumerosSoteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSoteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
//se busca que al darle al boton nuevo juego, se reinicie todo se debe hacer: 

function reiniciarJuego() {
    //limpiar la caja (por si tiene algo escrito)
    limpiarCaja();
    //indicar el mensaje de intervalo de numeros 
    //generar el numero aleatorio 
    // inicializar el numero de intentos
    condicionesIniciales();
    /* deshabilitar el boton de nuevo juego ( en este caso se deshabilita cada que 
    inicia un nuevo juego utlizando setAttribute)*/
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


