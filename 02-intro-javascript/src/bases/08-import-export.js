import { heroes } from './data/heroes';

const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner);
}

export {
    getHeroById,
}