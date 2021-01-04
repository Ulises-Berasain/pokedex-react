import React from "react";
import useMoveData from "hooks/useMoveData";
import "styled-components/MovesData.css";

export default function MovesData(props){
    const {moveData} = useMoveData(props.move);
    
    return(
        <React.Fragment>
            <td className="move-data">{moveData.typeName}</td>
            <td className="move-data">{moveData.damageClassName}</td>
            <td className="move-data">{moveData.pp}</td>
            {moveData.power === null ? <td className="move-data"> - </td>: <td className="move-data">{moveData.power}</td>}
        </React.Fragment>
    );
};
