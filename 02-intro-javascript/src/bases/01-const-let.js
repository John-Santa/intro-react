/**
 * Variables y constantes
 * const: valor fijo
 * let: valor dinamico con scope local o de bloque
*/

const name = 'John';
const lastName = 'Santa';

let diceValue = 5;
diceValue = 4;

console.log(`His name is ${name} ${lastName} and dice value is ${diceValue}`);

if (diceValue === 4) {
  console.log('You win');
  let value = diceValue + 1;
  console.log(`New dice value is ${value}`);
}

console.log(`dice value is ${diceValue}`);