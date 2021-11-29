import React, { useState } from 'react';
const profiles = [{ name: "foonzi", address: "banaland", planet: "martes" }];
const inputState = { name: "", address: "", planet: "" };
/* 
const style = { "margin-left": "10px", "margin-right": "10px" }; */

export default function Origin() {
    let [data, setData] = useState(profiles);
    let [inputs, setInputs] = useState(inputState);
    let { name, address, planet } = inputs;

    const handle = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const cbData = (el, idx) => {
        return <li key={idx}>{`[ PROFILE ]: ${el.name} - ${el.address} - ${el.planet}`}</li>
    }

    const fnAdd = () => {
        setData([...data, inputs]);
        setInputs(inputState);
    }
    const fnDelete = () => {
        setData([...data.filter(element => element.name !== name)]);
        setInputs(inputState);
    }
    const fnUpdate = () => {
        setData([...data.map(element => {
            if (element.name === name) {
                return inputs
            }
            else {
                return element
            }
        })]);
        setInputs(inputState)
    }
    const fnSeach = () => {
        data.forEach(element => {
            if (element.name === name) {
                setInputs(element)
            }
        });

    }

    return (
        <div>
            <h3>form data</h3>
            {data.map(cbData)}
            <Repeat />
            <section>
                <div>
                    <input class="name" placeholder="name" name="name" value={name} onChange={handle} />
                </div>
                <div>
                    <input class="addres" placeholder="address" name="address" value={address} onChange={handle} />
                </div>
                <div>
                    <input class="planet" placeholder="planet" name="planet" value={planet} onChange={handle} />
                </div>
            </section>
            <button onClick={fnAdd}>add</button>
            <button onClick={fnDelete}>delete</button>
            <button onClick={fnUpdate}>update</button>
            <button onClick={fnSeach}>buscar</button>
        </div>
    )

};

const Repeat = () => <div><br /><span>{"=".repeat("50")}</span></div>;