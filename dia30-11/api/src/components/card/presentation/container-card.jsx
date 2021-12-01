//componet
import { useState } from "react";
import Card from "../card";
//data
import dataMocks from "../mocks/data-test";
//styles
import "../style/style.css"

function ContainerCard() {
    let [data,setData]=useState(dataMocks);
    return(
        <div className="container">
            {data.map((card, index) => {
                return <Card key={index} index={index} text={card.text} bgColor={card.bg} setData={setData}/>
            })}
        </div>
    )
}
export default ContainerCard;
