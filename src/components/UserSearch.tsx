import React, { useState, useEffect } from "react";

// Define a TypeScript type for a user
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UserSearch: React.FC = () => {
    // State to store user ID
    const [userId, setUserId] = useState<number>(1);
    // State to store user data
    const [user, setUser] = useState<User | null>(null);
    // State for loading and error handling
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch user data when userId changes
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error("User not found");
                }
                const data: User = await response.json();
                setUser(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]); // 🔥 useEffect will re-run whenever `userId` changes

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>🔍 Search User</h2>
            <label>
                Enter User ID (1-10):{" "}
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    min="1"
                    max="10"
                />
            </label>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {user && (
                <div style={{ marginTop: "20px" }}>
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserSearch;
