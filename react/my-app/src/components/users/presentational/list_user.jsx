import React from "react";
import UsersMock from "../mocks/users_mock";
import { cbUsersMap } from "../callbacks/user_map";
export default function ListUser() {
    return (
        <div>
            {UsersMock.map(cbUsersMap)}
        </div>
    )
}