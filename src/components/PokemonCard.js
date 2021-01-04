import React from "react";
import PokemonImg from "components/PokemonImg";
import "styled-components/PokemonCard.css";
import {Link} from "react-router-dom";

export default function PokemonCard(props){

    const pokemons = props.pokemon;

    return(!!pokemons.pokemonName && pokemons.pokemonName.map(pokemon =>{
            return(
                <Link to={`/pokemon/${pokemon}`} key={`${pokemon}`} onClick={()=> document.getElementById(`${pokemon}`.innerText)} className="container-pokemon">
                    <div className="container-img-pokemon">
                        <PokemonImg pokemon={pokemon}/>
                    </div>
                    <h3 className="pokemon-title" id={pokemon}>{pokemon}</h3>
                </Link>
            );
        })
    );
};
