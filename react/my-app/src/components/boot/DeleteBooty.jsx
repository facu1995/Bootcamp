import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionDeleteUser } from "../../redux/duck";
import Boot from "./boot";

export default function DeleteBoot() {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handle = (e) => {
        setEmail(e.target.value
        );
    }

    const fnDeleteUser = () => {
        dispatch(actionDeleteUser(email));
        alert("delete user...");
    }

    return (
        <div>
            <section>
                <input placeholder="email" name="email" value={email} onChange={handle} />
            </section>
            <section>
                <button onClick={fnDeleteUser}>delete user</button>
            </section>
            <Boot/>
        </div>
    )
}