import React from "react";
import "styled-components/ButtonNextPrev.css";

export default function ButtonNextPrev(props){

    return(
        <div className="containter-next-prev">
            <button onClick={props.onClickPrev} className="button-prev btn btn-danger">Prev</button>
            <button onClick={props.onClickNext} className="button-next btn btn-danger">Next</button>
        </div>
    )
}