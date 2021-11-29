import React,{useState} from "react";
//mocks
import UsersMock from "../mocks/users_mock";

const user = { email: "", name: "", pass: "" };


export default function AddUser() {
    
    const [fields, setFields] = useState(user);
    const { email, name, pass } = fields;


    const handleChange = (evt) => {

        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }



    const fnCreateUser = () => {
        UsersMock.push(fields);
        alert("save user");
    }


    return (
        <div>
            <h1>add user</h1>
            <h2>email:{email} name:{name} pass {pass}</h2>
            <div>
                <input placeholder="name@exmaple.com" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
                <input placeholder="name" name="name" value={name} onChange={handleChange} />
            </div>
            <div>
                <input placeholder="password" name="pass" value={pass} onChange={handleChange} />
            </div>
            <div>
                <button onClick={fnCreateUser}>Agregar</button>
            </div>
        </div>
    )
}