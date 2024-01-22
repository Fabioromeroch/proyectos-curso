"use strict";

var numeroSecreto = 0;
var intentos = 0;
var listaNumerosSorteados = [];
var numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  var elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  var numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', "Acertaste el n\xFAmero en ".concat(intentos, " ").concat(intentos === 1 ? 'vez' : 'veces'));
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }

    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  var numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados); //Si ya sorteamos todos los números

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
    //Si el numero generado está incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', "Indica un n\xFAmero del 1 al ".concat(numeroMaximo));
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja(); //Indicar mensaje de intervalo de números 
  //Generar el número aleatorio
  //Inicializar el número intentos

  condicionesIniciales(); //Deshabilitar el botón de nuevo juego

  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
var listaGenerica = [];
var lenguajesdeProgramacion = ["javaScript", "c", "c++", "kotlin", "python"];
lenguajesdeProgramacion.push("java", "Ruby", "GoLand");

function mostrarLenguajesSeparadamente() {
  for (var i = 0; lenguajesdeProgramacion.length; i++) {
    console.log(lenguajesdeProgramacion[i]);
  }
}

mostrarLenguajesSeparadamente();
//# sourceMappingURL=app.dev.js.map
