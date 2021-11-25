import React, { useState } from "react";
import UsersMock from "../mocks/users_mock"


export default function DeleteUser() {
    let [email, setEmail] = useState("");

    const handleChange = (evt) => {
        setEmail(evt.target.value)
    }
    function fnDeleteUser() {
        let len=UsersMock.length;
        let i=0;
        for(; i<len;i++){
            if(UsersMock[i].email===email){
                delete UsersMock[i];
            }
        }
        alert("se borro");
    }

    return (
        <div>
            <h1>delete user</h1>
            <input value={email} onChange={handleChange} />
            <br />
            <br />
            <button onClick={fnDeleteUser}>borrar</button>
        </div>
    )
}