//componet
import Card from "../card";
//data
import { data1, data2 } from "../mocks/data-test";
//styles
import "../style/style.css"
function ContainerCard() {
    return (
        <div className="container">
            <div className="left">
            {data1.map((card, index) => {
                return <Card key={index} text={card.text} bgColor={card.bg } />
            })}
            </div>
            <div className="right">
            {data2.map((card, index) => {
                return <Card key={index} text={card.text} bgColor={card.bg} />
            })}
            </div>
        </div>
    )
}

export default ContainerCard;
