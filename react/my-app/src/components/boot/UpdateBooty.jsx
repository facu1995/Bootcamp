import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionModifyUser } from "../../redux/duck";
import Boot from "./boot";

const initFields = {
    email: "",
    name: "",
    age: 0
};


export default function UpdateBoot() {
    const [fields, setFields] = useState(initFields);
    const { email, name, age } = fields;

    const dispatch = useDispatch();

    const handle = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    }

    const fnModifyUser = () => {
        dispatch(actionModifyUser(email, name, age));
        alert("modify user...");
    }

    return (
        <div>
            <section>
                <input placeholder="email" name="email" value={email} onChange={handle} />
            </section>
            <section>
                <input placeholder="name" name="name" value={name} onChange={handle} />
            </section>
            <section>
                <input placeholder="age" name="age" value={age} onChange={handle} />
            </section>
            <section>
                <button onClick={fnModifyUser}>modify user</button>
            </section>
            <Boot/>
        </div>
        
    )
}