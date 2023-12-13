import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = (props) => {
    const [value, setValue] = useState("");
    return (
        <>
            <UserContext.Provider value={{ value, setValue }}>
                {props.children}
            </UserContext.Provider>
        </>
    );
};

export default UserContextProvider;
