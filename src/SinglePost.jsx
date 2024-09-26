import React, { useContext } from 'react';
import { LoginContext } from './context/LoginContextProvider';

function SinglePost() {
    const login = useContext(LoginContext)
    console.log(login)
    return (
        <div>
            single post
        </div>
    )
}

export default SinglePost
