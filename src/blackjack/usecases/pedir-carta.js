/**
 * Esta función permite tomar una carta de la baraja.
 * @param {Array<string>} deck
 * @returns {string} Retorna la carta de la baraja.
 */

export const pedirCarta = (deck) => {

  if (!deck || deck.length === 0) {
    throw 'No hay cartas para repartir';
  }

  return deck.pop();
};
