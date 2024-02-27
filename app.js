let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML =  document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto === numeroDeUsuario);
    //console.log(intentos);

    if (numeroSecreto === numeroDeUsuario)
    {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else
    {
        //el susuario no acerto
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'el numero secreto es menor');
        }
        else
        {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function reiniciarJuego()
{
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de inicio
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disable','true');
    
}

function limpiarCaja ()
{
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() 
{
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }
    else
    {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales()
{
    
    asignarTextoElemento('h1', 'juego del numero secreto!');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    document.querySelector('#reiniciar').setAttribute('disable','true');
}