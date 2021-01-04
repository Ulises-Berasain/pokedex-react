import React from "react";
import usePokemonData from "hooks/usePokemonData";
import "styled-components/PokemonTypes.css";


export default function PokemonTypes(props){
    const {pokemonData} = usePokemonData(props.pokemon);

    return(
        !!pokemonData.typesPokemon && pokemonData.typesPokemon.map(type =>{
            return <strong className={`badge rounded-pill ${type}`} key={type}>{type}</strong>
        })
    ); 
};
