import React from "react";
import usePokemonData from "hooks/usePokemonData";
import PokemonTypes from "components/PokemonTypes";
import PokemonAbilities from "components/PokemonAbilities";
import Spinner from "components/Spinner";
import "styled-components/PokemonDetails.css";

export default function PokemonDetails(props){
    const {loading, pokemonData} = usePokemonData(props.pokemon);

    return(
        <React.Fragment>
            {loading ? <Spinner/> :<img src={pokemonData.officialArtwork} alt={props.pokemon} className="image-pokemon-details"/>}
            <div className="container-data-pokemon">
                <h3 className="pokemon-name">{pokemonData.name}<span className="id">#<span>{pokemonData.id}</span></span></h3>

                <div className="container-types">
                    <PokemonTypes pokemon={props.pokemon}/>
                </div>

                <div className="container-details">
                    <strong className="height">Height: <span className="heigh-value">{pokemonData.height}</span></strong>
                    <strong className="weight">Weight: <span className="weight-value">{pokemonData.weight}</span></strong>
                    <PokemonAbilities pokemon={props.pokemon}/> 
                </div>
            </div>
        </React.Fragment>
    );
};
