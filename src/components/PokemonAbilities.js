import React from "react";
import usePokemonData from "hooks/usePokemonData";
import "styled-components/PokemonAbilities.css";

export default function PokemonAbilities(props){
    const {pokemonData} = usePokemonData(props.pokemon);

    return(
        [<h1 className="abilities-title">Abilities</h1>,
        !!pokemonData.stats && pokemonData.abilities.map(abil=>{
            return(
                <React.Fragment>
                    <h3 className="ability-name" key={`abil${abil.ability.name} ${abil["is_hidden"]}`}>{abil.ability.name}: 
                        {abil["is_hidden"] ? <strong className="is-hidden" key={`is-hidden${abil.ability.name}`}> Is Hidden</strong> : <strong className="not-hidden" key={`not-hidden${abil.ability.name}`}> Not hidden</strong>}
                    </h3>
                </React.Fragment>
            );
        })]
        
    );
};
