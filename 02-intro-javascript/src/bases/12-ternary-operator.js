const active = true;

//* Valida ambas valores de active
let message = active ? 'Active' : 'Inactive';

//* Validar solo uno de los valores
let otherMessage = active && 'Active';

console.log(otherMessage);