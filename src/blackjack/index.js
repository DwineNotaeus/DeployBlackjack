import _ from 'underscore';
import {
  crearDeck,
  pedirCarta,
  acumularPuntos,
  crearCarta,
  turnoComputadora,
} from './usecases';
import { determinarGanador } from './usecases/determinar-ganador';
// import { crearDeck } from './usecases/crear-deck';
// import { pedirCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';

// import { cualquierNombre } from './usecases/crear-deck';
// import cualquierNombre, { Saludar } from './usecases/crear-deck';
//*Renombrar módulo exportado
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';

// 2C = Two of Clubs
// 2D = Two of Diaminds
// 2H = Two of Hearts
// 2S = Two of Spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo');

const lblPuntos = document.querySelectorAll('small'),
  divCartasJugadores = document.querySelectorAll('.divCartas');

btnPedir.disabled = true;
btnDetener.disabled = true;

const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);
  //   deck = cualquierNombre(tipos, especiales); // Invocación al módulo
  puntosJugadores = [];

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  lblPuntos.forEach((elem) => (elem.innerHTML = 0));
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

// deck = []; lanza esta exepcion throw 'No hay cartas para repartir';

// Eventos
// Una función enviada como parámetro se le conoce como CALLBACK
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, lblPuntos);

  crearCarta(carta, 0, divCartasJugadores);

  if (puntosJugador > 21) {
    console.warn('Lo siento, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores, deck, divCartasJugadores, lblPuntos);
    determinarGanador(puntosJugadores);
  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores, deck, divCartasJugadores, lblPuntos);
    determinarGanador(puntosJugadores);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores, deck, divCartasJugadores, lblPuntos);
  determinarGanador(puntosJugadores);
});

btnNuevo.addEventListener('click', () => {
  inicializarJuego();
});
