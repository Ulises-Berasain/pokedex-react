import {URL_POKEMON} from "api/setting";

export default async function getPokemonData(pokemonName){
    const pokeURL = `${URL_POKEMON}/${pokemonName}`;

    return await fetch(pokeURL)
    .then(res => res.json())
    .then(response =>{
        const {sprites} = response;
        const {abilities} = response;
        const {name} = response;
        const{weight} = response;
        const {moves} = response;
        const {types} = response;
        const {stats} = response;
        const {height} = response;
        const {id} = response;

        const imgPokemon = ()=>{
            const sprite = sprites.other["official-artwork"]["front_default"]
            return sprite;
        };

        const typePokemon = ()=>{
            const type = types.map(e => {return e.type.name})
            return type;
        };
        
        const typesPokemon = typePokemon();
        const officialArtwork = imgPokemon();

        return {officialArtwork, name, abilities, moves, typesPokemon, stats, height, weight, id};
    })
    .catch(error=>{ return error});
};
