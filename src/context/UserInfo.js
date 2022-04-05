import React, { createContext } from 'react';
export const UserContext = createContext();

const UserStore = (props) => {
    const users = {
        id: "",
        passwd: "",
        first_name: "",
        last_name: "",
        token: ""
    };
    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserStore;