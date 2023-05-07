import _ from 'underscore';
//* export const Saludar = 'Hola Mundo';

/**
 *
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Retorna una nueva baraja de cartas.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  //* Validaciones para JS en TypeScript no se requiere
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error('@tiposDeCarta es obligatorio');
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('@tiposEspeciales es obligatorio');

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  return _.shuffle(deck);
};

//* export default crearDeck;
