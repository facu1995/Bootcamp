import React, { useState } from "react";
import { useSelector } from "react-redux";
import Boot from "./boot";

const initFields = {
    email: "",
    name: "",
    age: 0
};


export default function SearchBoot() {
    const users = useSelector(state => state.users);
    const [correo, setCorreo] = useState("");
    
    const [fields, setFields] = useState(initFields);
    const { email, name, age } = fields;

    const handle = (e) => {
        setCorreo(e.target.value);
    }

    const fnSearchUser = () => {
        if (users.filter((el) => el.email === correo).length !== 0) {
            setFields(...users.filter((el) => el.email === correo));
            alert("Search user...");
        }
        else {
            alert("No lo encontro");
        }
    }

    return (
        <div>
            <section>
                <input placeholder="correo" name="correo" value={correo} onChange={handle} />
            </section>
            <section>
                <button onClick={fnSearchUser}>Search user</button>
            </section>
            <h2>Buscado es :{email + " " + name + " " + age} </h2>
            <Boot />
        </div>
    )
}