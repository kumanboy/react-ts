import {Info} from "../types.ts";
import React from "react";

type UserInfo = {
    user: Info
}

const UserInfo: React.FC<UserInfo> = ({user}) => {
    return (
        <div>
            <h2>UserInfo</h2>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
export default UserInfo
