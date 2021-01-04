import getMoveData from "api/getMoveData";
import {useEffect, useState} from "react";

export default function useMoveData(move){
    const [moveData, setMoveData] = useState([]);

    useEffect(()=>{
        getMoveData(move)
        .then(resp =>{
            setMoveData(resp);
        });
    }, [setMoveData, move]);

    return {moveData};
};
