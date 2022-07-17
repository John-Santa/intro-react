import { getHeroById } from "./08-import-export";

//* Asynchronous programming
const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const hero = getHeroById(2);
        //resolve(hero);
        //reject('Hero not found');
    }, 2000)
});

promise.then( (heroe) => {
    console.log( heroe );
}).catch( (error) => {
    console.warn( error );
});

const getHeroByIdAsync = async (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById(id);
            if(!hero) {
                reject(`Hero with id ${id} not found`);
            }
            resolve(hero);
        }, 5000);
    });
}

getHeroByIdAsync(2)
    .then( console.log )
    .catch( console.warn );