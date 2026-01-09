'use client';

import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({children, initialUser}) {
    const [user, setUser] = useState(initialUser);

    // Function to handle login/logout and update user state
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)