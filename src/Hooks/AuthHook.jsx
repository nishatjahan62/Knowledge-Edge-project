import React, { use } from 'react';
import AuthContext from '../Provider/AuthContext';

const AuthHook = () => {
const AuthHook=use(AuthContext)
    return AuthHook;
};

export default AuthHook;