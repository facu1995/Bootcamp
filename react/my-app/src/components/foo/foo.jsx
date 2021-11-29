import React from 'react';
//prop-type para si falta algun prop
import T from 'prop-types';
//components
import Developer from "./presentational/developer"

export default function Foo({ email, name, role, pass }) {
    return (
        <div>
            <h3>email</h3>
            <span>{email}</span>
            <h3>name</h3>
            <span>{name}</span>
            <h3>pass</h3>
            <span>{pass}</span>
            <h3>role</h3>
            <span><Developer role={role}/></span>
        </div>
    )
};

Foo.propTypes = {
    email: T.string.isRequired,
    name: T.string.isRequired,
    pass: T.string.isRequired,
    role: T.string.isRequired

}