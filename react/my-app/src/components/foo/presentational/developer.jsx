import React, {Fragment} from "react";
//components
import {Fullstack, Front, Dev} from "./devs";

export default function Developer({ role }) {
    let profile = {
        "fullstack": <Fullstack/>,
        "front": <Front/>
    }[role];
    return (
        <Fragment>
            <div>====================</div>
                {profile || <Dev/>}
            <div>====================</div>
        </Fragment>
    )
}
