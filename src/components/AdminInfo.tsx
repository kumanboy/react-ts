import {AdminInfoList} from "../types.ts";
import React from "react";

type AdminInfo = {
    admin: AdminInfoList
}

const AdminInfo: React.FC<AdminInfo> = ({admin}) => {
    return (
        <div>
            <h2>AdminInfo</h2>
            <p>Id: {admin.id}</p>
            <p>Name: {admin.name}</p>
            <p>Email: {admin.email}</p>
            <p>Role: {admin.role}</p>
            <p>Last Login: {admin.lastLogin.toLocaleTimeString()}</p>
        </div>
    )
}
export default AdminInfo
