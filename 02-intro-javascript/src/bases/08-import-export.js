import { heroes } from './data/heroes';

const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

console.log(getHeroById(2));

const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));