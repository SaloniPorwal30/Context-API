import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const UserInputResponse = () => {
    const handleVal = useContext(UserContext);
    console.log(handleVal);
    return (
        <div>{handleVal.value}</div>
    )
}

export default UserInputResponse