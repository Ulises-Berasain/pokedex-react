import React from "react";
import usePokemonData from "hooks/usePokemonData";
import "styled-components/PokemonStats.css";

export default function PokemonStats(props){
    const {pokemonData} = usePokemonData(props.pokemon);

    return (
        <React.Fragment>
            <thead className="table-head-stats">
                <tr>
                    {!!pokemonData.stats && pokemonData.stats.map(st =>{
                        return(
                            <th className="stat-title" key={st.stat.name}>{st.stat.name}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody className="table-body-stats">
                <tr>
                    {!!pokemonData.stats &&pokemonData.stats.map(st =>{
                        return(
                            <td className="stat-value" key={`${st["base_stat"]} ${st.stat.name}`}>{st["base_stat"]}</td>
                        );   
                    })}
                </tr>
            </tbody>
        </React.Fragment>
    );
};
