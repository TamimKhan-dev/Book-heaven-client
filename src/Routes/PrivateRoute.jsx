import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-xl absolute top-1/3 left-1/2"></span>
    }

    if(user) {
        return children;
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>;
};

export default PrivateRoute;