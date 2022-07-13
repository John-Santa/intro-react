//* Functions
//* No es recomedable creear este tipo de funciones ya que son facilmente modificables
//* y puede generar errores
function sayHello( name ){
    return(`Hello ${name}`);
}

console.log(sayHello('John'));

//* Arrow functions
const sayHelloByName = (name) => `Hello ${name}`;


console.log(sayHelloByName('John'));

const getUser = () => {
    return{
        uuid: '123',
        name: 'John',
        age: 26
    }
}

console.log(getUser());

const getActiveUser = (name) => ({
        uuid: '123',
        name: name,
});


const activeUser = getActiveUser('John');
console.log(activeUser);