import {URL_POKEMON} from "api/setting"

export default async function getPokemons({limit=20, page=0} = {}){
    const apiURL = `${URL_POKEMON}/?offset=${limit * page}}&limit=${limit}`;

    return await fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
        const {results} = response;
        const {count} = response;

        const pokemonName = results.map(poke =>{
            const {name} = poke;
            return name;
        });

        return {pokemonName, count};
    });
};
