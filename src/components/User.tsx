import {ReactNode} from "react";

interface UserShape  {
    children: ReactNode
}

const User = (
    {children}:UserShape) =>
{
    return (
        <div>
            {children}
        </div>
    )
}
export default User
