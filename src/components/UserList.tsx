import React, { useState, useEffect } from "react";

// Define TypeScript type for a user
type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [refresh, setRefresh] = useState<number>(0); // State to trigger re-fetch
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Sorting state

    // Function to fetch users
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Failed to fetch users");
            const data: User[] = await response.json();
            setUsers(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect with `refresh` dependency → Runs when `refresh` changes
    useEffect(() => {
        fetchUsers();
    }, [refresh]); // Runs when `refresh` changes

    // useEffect for auto-refresh every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRefresh((prev) => prev + 1);
        }, 10000);
        return () => clearInterval(interval); // Cleanup
    }, []);

    // Sort users based on sortOrder
    const sortedUsers = [...users].sort((a, b) =>
        sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>👥 User List (Auto-refresh every 10s)</h2>
            <button onClick={() => setRefresh((prev) => prev + 1)} disabled={loading}>
                🔄 Refresh Now
            </button>
            <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} style={{ marginLeft: "10px" }}>
                🔀 Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <ul>
                {sortedUsers.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.username}) - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
