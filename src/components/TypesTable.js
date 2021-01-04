import React from "react";
import table from "img/type-table.png";
import eachType from "img/each-type.png";
import "styled-components/TypesTable.css";

export default function TypesTable(){
    
    return (
        <div className="container-types-table">
            <img src={table} alt="Types table" className="types-table"/>
            <img src={eachType} alt="Each type table" className="each-type"/>
        </div>
    );
};
