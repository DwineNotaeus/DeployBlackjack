import { valorCarta } from './valor-carta';
/**
 * turno: 0 primer jugador y el último será la computadora
 * @param {*} carta
 * @param {*} turno
 * @returns
 */
export const acumularPuntos = (carta, turno, puntosJugadores, lblPuntos) => {
  debugger;
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  lblPuntos[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
