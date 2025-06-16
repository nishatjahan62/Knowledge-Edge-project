import React, { use } from 'react';
import AuthContext from '../Provider/AuthContext';

const AuthHook = () => {
const useAuth=use(AuthContext)
    return useAuth;
};

export default AuthHook;