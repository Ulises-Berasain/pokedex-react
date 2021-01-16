import {URL_POKEMON} from "api/setting";
import whosThatPokemon from "img/que-pokemon.png";

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
        console.log(abilities)
        return {officialArtwork, name, abilities, moves, typesPokemon, stats, height, weight, id};
    })
    .catch(error=>{ 
        const name = "Enter a valid Pokemon, check if you wrote the name correctly";
        const id = "0";
        const height = "???";
        const weight = "???";
        const typesPokemon = ["error"];
        const officialArtwork = whosThatPokemon;

        return {name, id, height, weight, typesPokemon, officialArtwork};
    });
};
