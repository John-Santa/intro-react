/**
 * Literal Objects
 * Son conocidos tambien como diccionarios.
 * Son una forma de definir un objeto.
 * Son pares de datos tipo clave-valor.
 * Es recomendable terminar con ,
 * Se pueden agregar otros objetos dentro de un objeto.
 * Se pueden agregar metodos dentro de un objeto.
 */

 const person = {
    name: 'John',
    lastName: 'Santa',
    age: 26,
    isMarried: false,
    hobbies: ['Sports', 'Cooking', 'Reading', 'Coding', 'Video Games'],
    address: {
        city: 'Stambul',
        country: 'Turkey',
        zipCode: '12345'
    },
    getBirthYear: function () {
        return 2022 - this.age;
    },
};

console.table({ person });

/**
 * Spread Operator
 * Es un operador que permite clonar un objeto o un arreglo.
 */
const person2 = { ...person };
person2.name = 'Maicol';
person2.age = 19;
console.table({ person2 });