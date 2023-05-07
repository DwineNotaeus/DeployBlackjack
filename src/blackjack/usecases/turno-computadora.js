import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-carta';
import { determinarGanador } from './determinar-ganador';

/**
 * turno de la computadora
 * @param {*} puntosMinimos
 */
export const turnoComputadora = (puntosJugadores, deck, divCartasJugadores, lblPuntos) => {
  debugger;
  let [puntosMinimos, puntosComputadora] = puntosJugadores;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, lblPuntos );
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
};
