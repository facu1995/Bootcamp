import React from "react";
//data
import data from "./mocks/fake_mocks";
//callbacks
import {cbPair,cbList} from "./callbacks/map_callbacks";
//style
import "./style/list.css"

const List=()=>{
    return(
        <div className="bg">
            <p>===================</p>
            <h1>List</h1>
            {data.map(cbList)}
            <p>===================</p>
            <h1>odd / even</h1>
            {data.map(cbPair)}

        </div>
    )
}


export default List;