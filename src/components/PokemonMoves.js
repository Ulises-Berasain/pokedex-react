import React from "react";
import usePokemonData from "hooks/usePokemonData";
import "styled-components/PokemonMoves.css";
import MovesData from "components/MovesData";

export default function PokemonMoves(props){
    const {pokemonData} = usePokemonData(props.pokemon);

    return(
        <React.Fragment>
            <thead className="table-head-moves">
                <tr>
                    <th className="th-moves">Moves</th>
                    <th className="th-moves">Type</th>
                    <th className="th-moves">Damage Class</th>
                    <th className="th-moves">PP</th>
                    <th className="th-moves">Power</th>
                    <th className="th-moves">Moves Learn Method</th>
                </tr>
            </thead>
            <tbody className="table-body-stats">
                {!!pokemonData.moves && pokemonData.moves.map(st =>{

                    return(
                        <tr key={st.move.name}>
                            <td className="move-value" key={st.move.name}>{st.move.name}</td>
                            <MovesData move={st.move.name}/>
                            {st["version_group_details"][0]["move_learn_method"].name === "machine"?<td className="move-method" key={`${st.move.name} machine`}>TM</td>:<td className="move-method" key={`${st.move.name} Level Up`}>Level Up</td>}
                        </tr>
                    );   
                })}
            </tbody>
        </React.Fragment>
    );
};
