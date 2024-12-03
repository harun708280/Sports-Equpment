import React, { useContext } from 'react';
import { UserAuthContext } from '../Firebase/Authentication';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,isLoading}=useContext(UserAuthContext)
    if (isLoading) {
        return <h1>Loading......</h1>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login'> </Navigate>
        </div>
    );
};

export default Private;