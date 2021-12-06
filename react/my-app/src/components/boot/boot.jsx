import React from "react";
import { useSelector } from "react-redux";
//components
export default function Boot() {
    const users = useSelector(state => state.users);
    return (
        <div>
            <br/>
            <p>{"=".repeat(50)}</p>
            <h3>users</h3>
            {users.map((user, idx) => {
                return <li key={idx}>{user.email+" "+user.name+" "+user.age}</li>
            })}
        </div>
    )
}