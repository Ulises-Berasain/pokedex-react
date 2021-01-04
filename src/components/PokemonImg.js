import usePokemonData from "hooks/usePokemonData";
import React from "react";
import "styled-components/PokemonImg.css";
import Spinner from "components/Spinner";

export default function PokemonImg(props){
    const {loading, pokemonData} = usePokemonData(props.pokemon);

    return (
        <React.Fragment>
            {loading ? <Spinner/> :<img src={pokemonData.officialArtwork} alt={props.pokemon} className="image-pokemon"/>}
        </React.Fragment>
    );
};
