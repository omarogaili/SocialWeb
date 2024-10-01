import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInformation, setUserInformation] = useState(null);

    return (
        <UserContext.Provider value={{ userInformation, setUserInformation }}>
            {children}
        </UserContext.Provider>
    );
};
