//Asignacion desestructurante
const person = {
    name: 'Bruce',
    lastName: 'Wayne',
    age: 35,
    superHeroName: 'Batman'
}

//Desestructuracion en el argumento de una funcion
const getUser = ({ name, lastName, age, range = 'Super hero' }) => {
    return {
        name,
        lastName,
        age,
        range,
        latLng: {
            lat: -12.12,
            lng: -12.12
        }
    }
}

const { name, lastName, age, range, latLng: { lat, lng } } = getUser(person);
console.log(name, lastName, age, range, lat, lng);
