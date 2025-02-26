import UserInfo from "./components/UserInfo.tsx";
import AdminInfo from "./components/AdminInfo.tsx";
import {Info, AdminInfoList} from "./types.ts";

const App = () => {
    const user : Info= {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
    };

    const admin :AdminInfoList= {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "admin",
        lastLogin: new Date(),
    };


    return (
        <div>
            <UserInfo user={user} />
            <AdminInfo admin={admin} />
        </div>
    );
};

export default App;