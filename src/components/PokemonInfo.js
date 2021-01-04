import React from "react";
import PokemonDetails from "components/PokemonDetails";
import PokemonStats from "components/PokemonStats";
import PokemonMoves from "components/PokemonMoves";
import {useParams} from 'react-router-dom';
import "styled-components/PokemonInfo.css";

export default function PokemonsInfo(){
    const {pokemon} = useParams();

    return(
        <div className="container-pokemon-info">
            <div className="container-pokemon-details">
                <PokemonDetails pokemon={pokemon}/>
            </div>

            <table className="table-stats">
                <PokemonStats pokemon={pokemon}/>
            </table>

            <table className="table-moves">
                <PokemonMoves pokemon={pokemon}/>
            </table>
        </div>
    );
};
